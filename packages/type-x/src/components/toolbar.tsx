import { useTypexContext } from "@/hooks/useTypex"
import { ActionButtons } from "./action-buttons"

const Toolbar = () => {
    const { editor } = useTypexContext()
    return (
        <div className="x-block x-border-b x-px-4 x-py-2 x-space-x-2">
            <ActionButtons icon="Bold" onClick={() => editor.chain().toggleBold().run()} />
            <ActionButtons icon="Italic" />
        </div>
    )
}

export default Toolbar