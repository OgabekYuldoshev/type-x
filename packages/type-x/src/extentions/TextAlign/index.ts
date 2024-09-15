import TipTapTextAlign from "@tiptap/extension-text-align";
import { TextAlignComponent } from "./TextAlignComponent";

const TextAlignExtension = TipTapTextAlign.configure({
  types: ["heading", "paragraph"],
});

export { TextAlignExtension, TextAlignComponent };
