import { renderBaseMarks } from "@/constants";
import { useTypexContext } from "@/hooks/useTypex";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";

const BubbleMenu = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();

  return (
    <TipTapBubbleMenu
      editor={editor}
      className="x-inline-flex x-items-center x-p-2 x-gap-x-2 x-bg-background x-border x-rounded x-shadow"
    >
      {renderBaseMarks({ editor, t })}
    </TipTapBubbleMenu>
  );
};

export default BubbleMenu;
