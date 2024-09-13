import { useTypexContext } from "@/hooks/useTypex"
import { EditorContent as TipTapEditorContent } from "@tiptap/react"

const EditorContent = () => {
    const { editor } = useTypexContext()
    return (
        <div>
            <TipTapEditorContent editor={editor} className="focus-within:x-outline-none" />
        </div>
    )
}

export default EditorContent