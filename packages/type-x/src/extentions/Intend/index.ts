import { Extension } from "@tiptap/core";
import type { Command, Editor } from "@tiptap/core";
import { Transaction } from "@tiptap/pm/state";
import { AllSelection, TextSelection } from "@tiptap/pm/state";
import { isList } from "@tiptap/core";

export const enum IndentProps {
  max = 7,
  min = 0,

  more = 1,
  less = -1,
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    indent: {
      /**
       * Set the indent attribute
       */
      indent: () => ReturnType;
      /**
       * Set the outdent attribute
       */
      outdent: () => ReturnType;
    };
  }
}

export interface IndentOptions {
  types: string[];
  minIndent: number;
  maxIndent: number;
}
export function clamp(val: number, min: number, max: number): number {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}
function updateIndentLevel(
  tr: Transaction,
  delta: number,
  types: string[],
  editor: Editor
): Transaction {
  const { doc, selection } = tr;

  if (!doc || !selection) {
    return tr;
  }

  if (
    !(selection instanceof TextSelection || selection instanceof AllSelection)
  ) {
    return tr;
  }

  const { from, to } = selection;

  doc.nodesBetween(from, to, (node, pos) => {
    const nodeType = node.type;

    if (types.includes(nodeType.name)) {
      tr = setNodeIndentMarkup(tr, pos, delta);
      return false;
    } else if (isList(node.type.name, editor.extensionManager.extensions)) {
      return false;
    }
    return true;
  });

  return tr;
}

export function setNodeIndentMarkup(
  tr: Transaction,
  pos: number,
  delta: number
): Transaction {
  if (!tr.doc) {
    return tr;
  }

  const node = tr.doc.nodeAt(pos);
  if (!node) {
    return tr;
  }

  const minIndent = IndentProps.min;
  const maxIndent = IndentProps.max;

  const indent = clamp((node.attrs.indent || 0) + delta, minIndent, maxIndent);

  if (indent === node.attrs.indent) {
    return tr;
  }

  const nodeAttrs = {
    ...node.attrs,
    indent,
  };

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

export function createIndentCommand({
  delta,
  types,
}: {
  delta: number;
  types: string[];
}): Command {
  return ({ state, dispatch, editor }) => {
    const { selection } = state;
    let { tr } = state;
    tr = tr.setSelection(selection);
    tr = updateIndentLevel(tr, delta, types, editor);

    if (tr.docChanged) {
      if (dispatch) dispatch(tr);
      return true;
    }

    return false;
  };
}
export const IndentExtension = Extension.create<IndentOptions>({
  name: "indent",
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["paragraph", "heading"],
      minIndent: IndentProps.min,
      maxIndent: IndentProps.max,
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (element) => {
              const identAttr = element.dataset.indent;
              return (identAttr ? Number.parseInt(identAttr, 10) : 0) || 0;
            },
            renderHTML: (attributes) => {
              if (!attributes.indent) {
                return {};
              }
              return {
                style: `text-indent: ${attributes.indent * 48}px`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      indent: () =>
        createIndentCommand({
          delta: IndentProps.more,
          types: this.options.types,
        }),
      outdent: () =>
        createIndentCommand({
          delta: IndentProps.less,
          types: this.options.types,
        }),
    };
  },

  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent(),
    };
  },
});
