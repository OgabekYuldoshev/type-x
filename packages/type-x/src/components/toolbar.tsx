import { useTypexContext } from "@/hooks/useTypex";
import { renderBaseMarks } from "@/constants";
import { createActionButtons } from "./action-buttons";
import { Separator } from "./ui/separator";

const renderHistoryCommands = createActionButtons(({ editor, t }) => [
  {
    title: t("x.undo"),
    icon: "Undo",
    onClick: () => editor.chain().undo().run(),
    disabled: !editor.can().undo() || false,
  },
  {
    title: t("x.redo"),
    icon: "Redo",
    onClick: () => editor.chain().redo().run(),
    disabled: !editor.can().redo() || false,
  },
]);

const Toolbar = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  return (
    <div className="x-flex x-items-center x-border-b x-px-4 x-py-2 x-space-x-2">
      {renderHistoryCommands({ editor, t })}
      <Separator orientation="vertical" />
      {renderBaseMarks({ editor, t })}
    </div>
  );
};

export default Toolbar;
