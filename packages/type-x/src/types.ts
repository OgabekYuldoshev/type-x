import { Editor } from "@tiptap/core";

export type GeneralActionProps = {
  editor: Editor;
  t: (key: string) => string;
};
