import { createActionButtons } from "@/components/action-button";
import ActionPopover from "@/components/action-popover";
import { useTypexContext } from "@/hooks/useTypex";

const renderButtons = createActionButtons(({ editor, t }) => [
  {
    title: t("x.text_align_left"),
    icon: "AlignLeft",
    onClick: () => editor.chain().setTextAlign("left").run(),
    onActive: () => editor.isActive({ textAlign: "left" }),
  },
  {
    title: t("x.text_align_center"),
    icon: "AlignCenter",
    onClick: () => editor.chain().setTextAlign("center").run(),
    onActive: () => editor.isActive({ textAlign: "center" }),
  },
  {
    title: t("x.text_align_right"),
    icon: "AlignRight",
    onClick: () => editor.chain().setTextAlign("right").run(),
    onActive: () => editor.isActive({ textAlign: "right" }),
  },
  {
    title: t("x.text_align_justify"),
    icon: "AlignJustify",
    onClick: () => editor.chain().setTextAlign("justify").run(),
    onActive: () => editor.isActive({ textAlign: "justify" }),
  },
]);

export const TextAlignComponent = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();

  return (
    <ActionPopover icon="AlignJustify">
      {renderButtons({ editor, t })}
    </ActionPopover>
  );
};
