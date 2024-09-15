import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Underline as UnderlineExtension } from "@tiptap/extension-underline";
import { TextAlignExtension } from "./TextAlign";
import { TableExtension } from "./Table";

export const PlaceholderExtension = Placeholder.configure({
  placeholder: ({ node }) => {
    if (node.type.name === "heading") {
      return `Heading ${node.attrs.level}`;
    }
    return "Press '/' for commands";
  },
  includeChildren: true,
});

export const defaultExtentions = [
  StarterKit.configure(),
  PlaceholderExtension,
  UnderlineExtension,
  TextAlignExtension,
  TableExtension.configure(),
];
