import { createActionButtons } from "./components/action-buttons";

export const renderBaseMarks = createActionButtons(({ editor, t }) => [
  {
    title: t("x.bold"),
    icon: "Bold",
    onClick: () => editor.chain().toggleBold().run(),
    disabled: !editor.can().toggleBold() || false,
    onActive: () => editor.isActive("bold"),
  },
  {
    title: t("x.italic"),
    icon: "Italic",
    onClick: () => editor.chain().toggleItalic().run(),
    disabled: !editor.can().toggleItalic() || false,
    onActive: () => editor.isActive("italic"),
  },
  {
    title: t("x.underline"),
    icon: "Underline",
    onClick: () => editor.chain().toggleUnderline().run(),
    disabled: !editor.can().toggleUnderline() || false,
    onActive: () => editor.isActive("underline"),
  },
  {
    title: t("x.strikethrough"),
    icon: "Strikethrough",
    onClick: () => editor.chain().toggleStrike().run(),
    disabled: !editor.can().toggleStrike() || false,
    onActive: () => editor.isActive("strike"),
  },
  {
    title: t("x.code"),
    icon: "Code",
    onClick: () => editor.chain().toggleCode().run(),
    disabled: !editor.can().toggleCode() || false,
    onActive: () => editor.isActive("code"),
  },
]);
