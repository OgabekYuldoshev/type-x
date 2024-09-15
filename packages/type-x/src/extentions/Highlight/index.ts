import { Highlight } from "@tiptap/extension-highlight";
export { default as HighlightComponent } from "./highlight-component";
export const HighlightExtension = Highlight.configure({
  multicolor: true,
});
