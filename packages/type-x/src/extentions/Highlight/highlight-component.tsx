import ActionPopover from "@/components/action-popover";
import ColorPicker from "@/components/color-picker";
import { useTypexContext } from "@/hooks/useTypex";
import { useState } from "react";

const HighlightComponent = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  const [isOpen, setOpen] = useState(false);
  function handleSelect(color: string) {
    editor.chain().focus().setHighlight({ color }).run();
    setOpen(false);
  }

  function handleReset() {
    editor.chain().focus().unsetHighlight().run();
    setOpen(false);
  }

  return (
    <ActionPopover open={isOpen} onOpenChange={setOpen} title={t("x.highlight")} icon="Highlighter">
      <ColorPicker color={"#000000"} onChange={handleSelect} onReset={handleReset} />
    </ActionPopover>
  );
};

export default HighlightComponent;
