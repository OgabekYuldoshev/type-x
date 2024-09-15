import { createActionButtons } from "@/components/action-button";
import { useTypexContext } from "@/hooks/useTypex";

const intend = createActionButtons(({ editor, t }) => [
  {
    title: t("x.intend"),
    icon: "IndentIncrease",
    disabled: !editor.can().indent() || false,
    onClick: () => editor.chain().indent().run(),
  },
  {
    title: t("x.outend"),
    icon: "IndentDecrease",
    disabled: !editor.can().outdent() || false,
    onClick: () => editor.chain().outdent().run(),
  },
]);
const IntendComponent = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  return intend({ editor, t });
};

export default IntendComponent;
