import type { Connection, CancellationToken } from "vscode-languageserver";
import type { TextDocument } from "vscode-languageserver-textdocument";
import type { TextDocuments } from "../lsp/textDocuments";
import type { Feature } from "../feature";
import type { Configurations } from "../config";
import type { TabbyApiClient } from "../http/tabbyApiClient";
import {
  ChatEditToken,
  ChatEditRequest,
  ChatEditParams,
  ChatEditResolveRequest,
  ChatEditResolveParams,
  ChatEditCommandRequest,
  ChatEditCommandParams,
  ChatEditCommand,
  ChatFeatureNotAvailableError,
  ChatEditDocumentTooLongError,
  ChatEditMutexError,
  ServerCapabilities,
} from "../protocol";
import cryptoRandomString from "crypto-random-string";
import { isEmptyRange } from "../utils/range";
import { applyWorkspaceEdit, readResponseStream, Edit } from "./utils";

export class ChatEditProvider implements Feature {
  private lspConnection: Connection | undefined = undefined;
  private currentEdit: Edit | undefined = undefined;
  private mutexAbortController: AbortController | undefined = undefined;

  constructor(
    private readonly configurations: Configurations,
    private readonly tabbyApiClient: TabbyApiClient,
    private readonly documents: TextDocuments<TextDocument>,
  ) {}

  initialize(connection: Connection): ServerCapabilities {
    this.lspConnection = connection;
    connection.onRequest(ChatEditCommandRequest.type, async (params) => {
      return this.provideEditCommands(params);
    });
    connection.onRequest(ChatEditRequest.type, async (params, token) => {
      return this.provideEdit(params, token);
    });
    connection.onRequest(ChatEditResolveRequest.type, async (params) => {
      return this.resolveEdit(params);
    });
    return {};
  }

  private isCurrentEdit(id: ChatEditToken): boolean {
    return this.currentEdit?.id === id;
  }

  async provideEditCommands(params: ChatEditCommandParams): Promise<ChatEditCommand[]> {
    const config = this.configurations.getMergedConfig();
    const commands = config.chat.edit.presetCommands;
    const result: ChatEditCommand[] = [];
    const document = this.documents.get(params.location.uri);

    result.push(
      ...Object.entries(commands)
        .filter(([_command, commandConfig]) => {
          for (const [filterKey, filterValue] of Object.entries(commandConfig.filters)) {
            if (filterValue) {
              switch (filterKey) {
                case "languageIdIn":
                  if (document && !filterValue.split(",").includes(document.languageId)) {
                    return false;
                  }
                  break;
                case "languageIdNotIn":
                  if (document && filterValue.split(",").includes(document.languageId)) {
                    return false;
                  }
                  break;
                default:
                  break;
              }
            }
          }
          return true;
        })
        .map(([command, commandConfig]) => {
          return {
            label: commandConfig.label,
            command,
            source: "preset",
          } as ChatEditCommand;
        }),
    );

    return result;
  }

  async provideEdit(params: ChatEditParams, token: CancellationToken): Promise<ChatEditToken | null> {
    if (params.format !== "previewChanges") {
      return null;
    }
    const document = this.documents.get(params.location.uri);
    if (!document) {
      return null;
    }
    if (!this.lspConnection) {
      return null;
    }
    if (!this.tabbyApiClient.isChatApiAvailable()) {
      throw {
        name: "ChatFeatureNotAvailableError",
        message: "Chat feature not available",
      } as ChatFeatureNotAvailableError;
    }
    const config = this.configurations.getMergedConfig();

    // FIXME(@icycodes): the command too long check is temporarily disabled,
    //    as we pass the diagnostics context as the command for now
    // if (params.command.length > config.chat.edit.commandMaxChars) {
    //   throw { name: "ChatEditCommandTooLongError", message: "Command too long" } as ChatEditCommandTooLongError;
    // }

    const documentText = document.getText();
    const selection = {
      start: document.offsetAt(params.location.range.start),
      end: document.offsetAt(params.location.range.end),
    };
    const selectedDocumentText = documentText.substring(selection.start, selection.end);
    if (selection.end - selection.start > config.chat.edit.documentMaxChars) {
      throw { name: "ChatEditDocumentTooLongError", message: "Document too long" } as ChatEditDocumentTooLongError;
    }

    if (this.mutexAbortController && !this.mutexAbortController.signal.aborted) {
      throw {
        name: "ChatEditMutexError",
        message: "Another smart edit is already in progress",
      } as ChatEditMutexError;
    }

    this.mutexAbortController = new AbortController();
    token.onCancellationRequested(() => this.mutexAbortController?.abort());

    let insertMode: boolean = isEmptyRange(params.location.range);
    const presetCommand = /^\/\w+\b/g.exec(params.command)?.[0];
    if (presetCommand) {
      insertMode = config.chat.edit.presetCommands[presetCommand]?.kind === "insert";
    }

    let promptTemplate: string;
    let userCommand: string;
    const presetConfig = presetCommand && config.chat.edit.presetCommands[presetCommand];
    if (presetConfig) {
      promptTemplate = presetConfig.promptTemplate;
      userCommand = params.command.substring(presetCommand.length);
    } else {
      promptTemplate = insertMode ? config.chat.edit.promptTemplate.insert : config.chat.edit.promptTemplate.replace;
      userCommand = params.command;
    }

    // Extract the selected text and the surrounding context
    const documentSelection = documentText.substring(selection.start, selection.end);
    let documentPrefix = documentText.substring(0, selection.start);
    let documentSuffix = documentText.substring(selection.end);
    if (documentText.length > config.chat.edit.documentMaxChars) {
      const charsRemain = config.chat.edit.documentMaxChars - documentSelection.length;
      if (documentPrefix.length < charsRemain / 2) {
        documentSuffix = documentSuffix.substring(0, charsRemain - documentPrefix.length);
      } else if (documentSuffix.length < charsRemain / 2) {
        documentPrefix = documentPrefix.substring(documentPrefix.length - charsRemain + documentSuffix.length);
      } else {
        documentPrefix = documentPrefix.substring(documentPrefix.length - charsRemain / 2);
        documentSuffix = documentSuffix.substring(0, charsRemain / 2);
      }
    }

    const messages: { role: "user"; content: string }[] = [
      {
        role: "user",
        content: promptTemplate.replace(
          /{{filepath}}|{{documentPrefix}}|{{document}}|{{documentSuffix}}|{{command}}|{{languageId}}/g,
          (pattern: string) => {
            switch (pattern) {
              case "{{filepath}}":
                return params.location.uri;
              case "{{documentPrefix}}":
                return documentPrefix;
              case "{{document}}":
                return documentSelection;
              case "{{documentSuffix}}":
                return documentSuffix;
              case "{{command}}":
                return userCommand;
              case "{{languageId}}":
                return document.languageId;
              default:
                return "";
            }
          },
        ),
      },
    ];
    const readableStream = await this.tabbyApiClient.fetchChatStream(
      {
        messages,
        model: "",
        stream: true,
      },
      this.mutexAbortController.signal,
    );

    const editId = "tabby-" + cryptoRandomString({ length: 6, type: "alphanumeric" });
    this.currentEdit = {
      id: editId,
      location: params.location,
      languageId: document.languageId,
      originalText: selectedDocumentText,
      editedRange: insertMode
        ? { start: params.location.range.end, end: params.location.range.end }
        : params.location.range,
      editedText: "",
      comments: "",
      buffer: "",
      state: "editing",
    };
    if (!readableStream) {
      return null;
    }
    await readResponseStream(
      readableStream,
      this.lspConnection,
      this.currentEdit,
      this.mutexAbortController,
      () => {
        this.currentEdit = undefined;
        this.mutexAbortController = undefined;
      },
      config.chat.edit.responseDocumentTag,
      config.chat.edit.responseCommentTag,
    );
    return editId;
  }

  async stopEdit(id: ChatEditToken): Promise<void> {
    if (this.isCurrentEdit(id)) {
      this.mutexAbortController?.abort();
    }
  }

  async resolveEdit(params: ChatEditResolveParams): Promise<boolean> {
    if (params.action === "cancel") {
      this.mutexAbortController?.abort();
      return false;
    }

    const document = this.documents.get(params.location.uri);
    if (!document) {
      return false;
    }

    if (!this.lspConnection) {
      return false;
    }

    let markers;
    let line = params.location.range.start.line;
    for (; line < document.lineCount; line++) {
      const lineText = document.getText({
        start: { line, character: 0 },
        end: { line: line + 1, character: 0 },
      });

      const match = /^>>>>>>> (tabby-[0-9|a-z|A-Z]{6}) (\[.*\])/g.exec(lineText);
      markers = match?.[2];
      if (markers) {
        break;
      }
    }

    if (!markers) {
      return false;
    }

    const previewRange = {
      start: {
        line: params.location.range.start.line,
        character: 0,
      },
      end: {
        line: params.location.range.start.line + markers.length,
        character: 0,
      },
    };
    const previewText = document.getText(previewRange);
    const previewLines = previewText.split("\n");
    const lines: string[] = [];
    previewLines.forEach((line, lineIndex) => {
      const marker = markers[lineIndex];
      if (!marker) {
        return;
      }
      if (params.action === "accept") {
        if ([".", "|", "=", "+"].includes(marker)) {
          lines.push(line);
        }
      }
      if (params.action === "discard") {
        if ([".", "=", "-"].includes(marker)) {
          lines.push(line);
        }
      }
    });

    await applyWorkspaceEdit(
      {
        edit: {
          changes: {
            [params.location.uri]: [
              {
                range: previewRange,
                newText: lines.join("\n") + "\n",
              },
            ],
          },
        },
        options: {
          undoStopBefore: false,
          undoStopAfter: false,
        },
      },
      this.lspConnection,
    );
    return true;
  }
}
