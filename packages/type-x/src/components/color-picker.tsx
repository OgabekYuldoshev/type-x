import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { Separator } from "./ui/separator";

const recommentaionColors = [
  "#000000", // Black
  "#FFFFFF", // White
  "#FFFF00", // Yellow
  "#FFB6C1", // Light Pink
  "#87CEFA", // Light Sky Blue
  "#32CD32", // Lime Green
  "#FFD700", // Gold
  "#FFA07A", // Light Salmon
  "#FF4500", // Orange Red
  "#DDA0DD", // Plum
  "#FF69B4", // Hot Pink
  "#ADFF2F", // Green Yellow
  "#00FFFF", // Cyan
  "#FF6347", // Tomato
];

type Props = {
  color: string;
  onChange: (color: string) => void;
  onReset?: () => void;
};
const ColorPicker = ({ color = "#000000", onChange, onReset }: Props) => {
  const [currentColor, setCurrentColor] = useState(color);

  function handleSelect(value: string) {
    onChange(value);
    setCurrentColor(value);
  }

  const debounced = useDebouncedCallback(handleSelect, 500);

  return (
    <div className="x-bg-background x-shadow x-inline-flex x-flex-col x-border x-p-2 x-rounded-lg x-items-center x-justify-center x-space-y-2">
      <HexColorPicker color={currentColor} onChange={debounced} />
      <div className="x-grid x-grid-cols-7 x-gap-1 x-mt-2">
        {recommentaionColors.map((color) => (
          <button
            type="button"
            key={color}
            className="x-size-6 x-rounded x-border"
            style={{ background: color }}
            onClick={() => handleSelect(color)}
          />
        ))}
      </div>
      {onReset && (
        <>
          <Separator />
          <Button onClick={onReset} className="x-block x-w-full">
            <Trash className="x-mr-2" size={18} />
            Reset
          </Button>
        </>
      )}
    </div>
  );
};

export default ColorPicker;
