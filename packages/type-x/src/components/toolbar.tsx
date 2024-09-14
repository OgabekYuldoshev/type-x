import { useTypexContext } from "@/hooks/useTypex";
import { renderBaseMarks } from "@/constants";

const Toolbar = () => {
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  return (
    <div className="x-block x-border-b x-px-4 x-py-2 x-space-x-2">
      {renderBaseMarks({ editor, t })}
    </div>
  );
};

export default Toolbar;
