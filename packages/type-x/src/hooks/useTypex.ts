import { Locale, useTranslation } from "@/locale";
import { useEditor, type UseEditorOptions } from "@tiptap/react";
import constate from "constate";

export type TypexProps = UseEditorOptions & {
  locale: Locale;
};

export const useTypex = ({ locale, ...props }: TypexProps) => {
  const editor = useEditor(props);
  const translation = useTranslation({ locale });

  if (!editor) {
    throw new Error("[Type-X]: Editor is not available!");
  }

  return { editor, translation };
};

const [TypexProvider, useTypexContext] = constate(useTypex);

export { TypexProvider, useTypexContext };
