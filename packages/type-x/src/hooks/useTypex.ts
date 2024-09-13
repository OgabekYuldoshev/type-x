import { useEditor, type UseEditorOptions } from "@tiptap/react";
import constate from "constate";

export type TypexProps = UseEditorOptions;


export const useTypex = (props: TypexProps) => {
    const editor = useEditor(props);

    if (!editor) {
        throw new Error("[Type-X]: Editor is not available!");
    }

    return { editor };
}

const [TypexProvider, useTypexContext] = constate(useTypex);

export { TypexProvider, useTypexContext };
