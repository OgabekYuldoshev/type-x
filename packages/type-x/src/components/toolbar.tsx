import { useTypexContext } from "@/hooks/useTypex";
import { renderBaseMarks } from "@/constants";
import { createActionButtons } from "./action-button";
import { Separator } from "./ui/separator";
import { createActionSelection } from "./action-selection";
import ActionPopover from "./action-popover";
import { TextAlignComponent } from "@/extentions/TextAlign";
import { TableComponent } from "@/extentions/Table";
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

const renderBaseNodes = createActionSelection(({ t, editor }) => [
  {
    title: t("x.normal"),
    icon: "ALargeSmall",
    disabled: !editor.can().setParagraph() || false,
    onAction: () => editor.chain().setParagraph().run(),
    onActive: () => editor.isActive("paragraph"),
  },
  ...[1, 2, 3].map(
    (level) =>
      ({
        title: t("x.heading" + level),
        icon: "Heading" + level,
        disabled: !editor.can().setHeading({ level } as any) || false,
        onAction: () =>
          editor
            .chain()
            .setHeading({ level } as any)
            .run(),
        onActive: () => editor.isActive("heading", { level }),
      }) as any
  ),
  {
    title: t("x.bulletlist"),
    icon: "List",
    disabled: !editor.can().toggleBulletList() || false,
    onAction: () => editor.chain().toggleBulletList().run(),
    onActive: () => editor.isActive("bulletList"),
  },
  {
    title: t("x.orderlist"),
    icon: "ListOrdered",
    disabled: !editor.can().toggleOrderedList() || false,
    onAction: () => editor.chain().toggleOrderedList().run(),
    onActive: () => editor.isActive("orderedList"),
  },
  {
    title: t("x.codeblock"),
    icon: "SquareChartGantt",
    disabled: !editor.can().toggleCodeBlock() || false,
    onAction: () => editor.chain().toggleCodeBlock().run(),
    onActive: () => editor.isActive("codeBlock"),
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
      <Separator orientation="vertical" />
      {renderBaseNodes({ editor, t })}
      <Separator orientation="vertical" />
      <TextAlignComponent />
      <TableComponent />
    </div>
  );
};

export default Toolbar;
