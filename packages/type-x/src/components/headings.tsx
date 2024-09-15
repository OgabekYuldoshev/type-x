import { useTypexContext } from "@/hooks/useTypex";
import { useMemo } from "react";
import ActionPopover from "./action-popover";
import { ActionButtons, createActionButtons } from "./action-button";

export const headings = createActionButtons(({ editor, t }) => [
  {
    title: t("x.normal"),
    icon: "CaseSensitive",
    variant: "ghost",
    disabled: !editor.can().setParagraph() || false,
    onClick: () => editor.chain().setParagraph().run(),
    onActive: () => editor.isActive("paragraph"),
  },
  {
    title: t("x.heading1"),
    icon: "Heading1",
    variant: "ghost",
    disabled: !editor.can().setHeading({ level: 1 }) || false,
    onClick: () => editor.chain().setHeading({ level: 1 }).run(),
    onActive: () => editor.isActive("heading", { level: 1 }),
  },
  {
    title: t("x.heading2"),
    icon: "Heading2",
    variant: "ghost",
    disabled: !editor.can().setHeading({ level: 2 }) || false,
    onClick: () => editor.chain().setHeading({ level: 2 }).run(),
    onActive: () => editor.isActive("heading", { level: 2 }),
  },
  {
    title: t("x.heading3"),
    icon: "Heading3",
    variant: "ghost",
    disabled: !editor.can().setHeading({ level: 3 }) || false,
    onClick: () => editor.chain().setHeading({ level: 3 }).run(),
    onActive: () => editor.isActive("heading", { level: 3 }),
  },
]);

const Headings = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();

  const items = headings({ editor, t }).getProps();

  const active = useMemo(() => {
    const activeElement = items.find((i) => i.onActive?.() || false);
    if (activeElement) {
      return activeElement;
    }
  }, [items]);

  return (
    <ActionPopover
      title={active?.title || "x.text.align.style"}
      icon={active?.icon || "CaseSensitive"}
    >
      {items.map((props, index) => (
        <ActionButtons key={props.icon + index} {...props} />
      ))}
    </ActionPopover>
  );
};

export default Headings;
