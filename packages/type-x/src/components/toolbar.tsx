import { useTypexContext } from "@/hooks/useTypex";
import { TextAlignComponent } from "@/extentions/TextAlign";
import { TableComponent } from "@/extentions/Table";

import { createActionButtons } from "./action-button";
import { Separator } from "./ui/separator";
import Headings from "./headings";

export const history = createActionButtons(({ editor, t }) => [
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

export const nodes = createActionButtons(({ t, editor }) => [
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
      {history({ editor, t })}
      <Separator orientation="vertical" className="x-h-6" />
      <Headings />
      <Separator orientation="vertical" className="x-h-6" />
      {nodes({ editor, t })}
      <Separator orientation="vertical" className="x-h-6" />
      <TextAlignComponent />
      <TableComponent />
    </div>
  );
};

export default Toolbar;
