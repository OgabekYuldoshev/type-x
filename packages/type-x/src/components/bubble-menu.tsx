import { baseMarks } from "@/constants";
import { useTypexContext } from "@/hooks/useTypex";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import Headings from "./headings";
import { Separator } from "./ui/separator";

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
      {baseMarks({ editor, t })}
      <Separator orientation="vertical" className="x-h-6" />
      <Headings />
    </TipTapBubbleMenu>
  );
};

export default BubbleMenu;
