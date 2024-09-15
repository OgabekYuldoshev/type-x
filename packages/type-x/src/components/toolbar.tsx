import { useTypexContext } from "@/hooks/useTypex";
import { TextAlignComponent } from "@/extentions/TextAlign";
import { TableComponent } from "@/extentions/Table";

import { ActionButtons, createActionButtons } from "./action-button";
import { Separator } from "./ui/separator";
import Headings from "./headings";
import { HighlightComponent } from "@/extentions/Highlight";
import { ColorComponent } from "@/extentions/Color";
import IntendComponent from "@/extentions/Intend/intend-component";
import LinkComponent from "@/extentions/Link/link-component";

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
    onClick: () => editor.chain().toggleBulletList().run(),
    onActive: () => editor.isActive("bulletList"),
  },
  {
    title: t("x.orderlist"),
    icon: "ListOrdered",
    disabled: !editor.can().toggleOrderedList() || false,
    onClick: () => editor.chain().toggleOrderedList().run(),
    onActive: () => editor.isActive("orderedList"),
  },
  {
    title: t("x.codeblock"),
    icon: "SquareChartGantt",
    disabled: !editor.can().toggleCodeBlock() || false,
    onClick: () => editor.chain().toggleCodeBlock().run(),
    onActive: () => editor.isActive("codeBlock"),
  },
]);

const Toolbar = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  function handlePageBreak() {
    editor.chain().setHorizontalRule().run();
  }
  return (
    <div className="x-flex x-items-center x-border-b x-px-4 x-py-2 x-space-x-2">
      {history({ editor, t })}
      <Separator orientation="vertical" className="x-h-5" />
      <Headings />
      <HighlightComponent />
      <ColorComponent />
      <Separator orientation="vertical" className="x-h-5" />
      {nodes({ editor, t })}
      <IntendComponent />
      <ActionButtons onClick={handlePageBreak} icon={"FlipVertical"} title={t("x.horizontal.rule")} />
      <Separator orientation="vertical" className="x-h-5" />
      <LinkComponent />
      <TextAlignComponent />
      <TableComponent />
    </div>
  );
};

export default Toolbar;
