import { Extension, type AnyExtension } from "@tiptap/core";

import { Placeholder, type PlaceholderOptions } from "@tiptap/extension-placeholder";
import { Document } from "@tiptap/extension-document";
import { TextStyle, type TextStyleOptions } from "@tiptap/extension-text-style";
import { Text } from "@tiptap/extension-text";
import { Dropcursor, type DropcursorOptions } from "@tiptap/extension-dropcursor";
import { HardBreak, type HardBreakOptions } from "@tiptap/extension-hard-break";
import { ListItem, type ListItemOptions } from "@tiptap/extension-list-item";
import { Paragraph, type ParagraphOptions } from "@tiptap/extension-paragraph";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { Selection } from "./Selection";
import Focus, { type FocusOptions } from "@tiptap/extension-focus";
import { TrailingNode, type TrailingNodeOptions } from "./TrailingNode";

export interface BaseKitOptions {
  document: false;
  text: false;
  gapcursor: false;
  focus: Partial<FocusOptions> | false;
  placeholder: Partial<PlaceholderOptions> | false;
  textStyle: Partial<TextStyleOptions> | false;
  dropCursor: Partial<DropcursorOptions> | false;
  hardBreak: Partial<HardBreakOptions> | false;
  listItem: Partial<ListItemOptions> | false;
  paragraph: Partial<ParagraphOptions> | false;
  trallingNode: Partial<TrailingNodeOptions> | false;
}

export const BaseKit = Extension.create<BaseKitOptions>({
  name: "Base-kit",
  addExtensions() {
    const extensions: AnyExtension[] = [];

    extensions.push(Selection);

    if (this.options.document !== false) {
      extensions.push(Document.configure());
    }

    if (this.options.placeholder !== false) {
      extensions.push(Placeholder.configure(this.options.placeholder));
    }

    if (this.options.text !== false) {
      extensions.push(Text.configure());
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure());
    }

    if (this.options.focus !== false) {
      extensions.push(Focus.configure(this.options.focus));
    }

    if (this.options.textStyle !== false) {
      extensions.push(TextStyle.configure(this.options.textStyle));
    }

    if (this.options.trallingNode !== false) {
      extensions.push(TrailingNode.configure(this.options.trallingNode));
    }

    if (this.options.dropCursor !== false) {
      extensions.push(Dropcursor.configure(this.options.dropCursor));
    }

    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak.configure(this.options.hardBreak));
    }

    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options.listItem));
    }

    if (this.options.paragraph !== false) {
      extensions.push(Paragraph.configure(this.options.paragraph));
    }
    return extensions;
  },
});
