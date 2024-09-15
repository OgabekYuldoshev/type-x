import { useTypexContext } from "@/hooks/useTypex";
import { EditorContent as TipTapEditorContent } from "@tiptap/react";

const EditorContent = () => {
  const { editor } = useTypexContext();
  return <TipTapEditorContent editor={editor} className="x-p-4" />;
};

export default EditorContent;
