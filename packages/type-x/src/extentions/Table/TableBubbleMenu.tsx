import { createActionButtons } from "@/components/action-button";
import { useTypexContext } from "@/hooks/useTypex";
import { BubbleMenu, isActive, Editor } from "@tiptap/react";
import { sticky, GetReferenceClientRect } from "tippy.js";

const table = createActionButtons(({ editor, t }) => [
  {
    title: t("x.table.column.before"),
    icon: "BetweenHorizontalEnd",
    variant: "ghost",
    onClick: () => editor.chain().focus().addColumnBefore().run(),
    disabled: !editor.can().addColumnBefore(),
  },
  {
    title: t("x.table.column.after"),
    icon: "BetweenHorizontalStart",
    variant: "ghost",
    onClick: () => editor.chain().focus().addColumnAfter().run(),
    disabled: !editor.can().addColumnAfter(),
  },
  {
    title: t("x.table.column.delete"),
    icon: "TableColumnsSplit",
    variant: "ghost",
    onClick: () => editor.chain().focus().deleteColumn().run(),
    disabled: !editor.can().deleteColumn(),
  },
  {
    title: t("x.table.row.before"),
    icon: "BetweenVerticalEnd",
    variant: "ghost",
    onClick: () => editor.chain().focus().addRowBefore().run(),
    disabled: !editor.can().addRowBefore(),
  },
  {
    title: t("x.table.row.after"),
    icon: "BetweenVerticalStart",
    variant: "ghost",
    onClick: () => editor.chain().focus().addColumnAfter().run(),
    disabled: !editor.can().addColumnAfter(),
  },
  {
    title: t("x.table.row.delete"),
    icon: "TableRowsSplit",
    variant: "ghost",
    onClick: () => editor.chain().focus().deleteRow().run(),
    disabled: !editor.can().deleteRow(),
  },
  {
    title: t("x.table.merge.cell"),
    icon: "TableRowsSplit",
    variant: "ghost",
    onClick: () => editor.chain().focus().mergeCells().run(),
    disabled: !editor.can().mergeCells(),
  },
  {
    title: t("x.table.split.cell"),
    icon: "TableCellsSplit",
    variant: "ghost",
    onClick: () => editor.chain().focus().splitCell().run(),
    disabled: !editor.can().splitCell(),
  },
  {
    title: t("x.table.delete"),
    icon: "Grid2x2X",
    variant: "ghost",
    onClick: () => editor.chain().focus().deleteTable().run(),
    disabled: !editor.can().deleteTable(),
  },
]);

const TableBubbleMenu = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  const shouldShow = ({ editor }: { editor: Editor }) => {
    return isActive(editor.view.state, "table");
  };

  const getReferenceClientRect: GetReferenceClientRect = () => {
    const {
      view,
      state: {
        selection: { from },
      },
    } = editor;

    const node = view.domAtPos(from).node as HTMLElement;
    if (!node) {
      return new DOMRect(-1000, -1000, 0, 0);
    }

    const tableWrapper = node?.closest?.(".tableWrapper");
    if (!tableWrapper) {
      return new DOMRect(-1000, -1000, 0, 0);
    }

    const rect = tableWrapper.getBoundingClientRect();

    return rect;
  };

  return (
    <BubbleMenu
      shouldShow={shouldShow}
      pluginKey={"table"}
      editor={editor}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          modifiers: [{ name: "flip", enabled: false }],
        },
        maxWidth: "auto",
        getReferenceClientRect,
        plugins: [sticky],
        sticky: "popper",
      }}
    >
      <div className="x-p-1 x-shadow x-border x-rounded x-flex x-gap-x-1 x-bg-background x-items-center">
        {table({ editor, t })}
      </div>
    </BubbleMenu>
  );
};

export default TableBubbleMenu;
