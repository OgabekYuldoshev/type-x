import ActionPopover from "@/components/action-popover";
import { useTypexContext } from "@/hooks/useTypex";
import { cn } from "@/lib/utils";
import { useState } from "react";

const generateArray = (length: number) =>
  Array.from({ length }).map((_, index) => index + 1);

const GRID_ROW = 10;
const GRID_COL = 10;

const TableComponent = () => {
  const [open, setOpen] = useState(false);
  const {
    editor,
    translation: { t },
  } = useTypexContext();
  const [grid, setGrid] = useState([0, 0]);

  function onCreateTable() {
    editor
      .chain()
      .focus()
      .insertTable({ rows: grid[0], cols: grid[1], withHeaderRow: false })
      .run();
    setOpen(false);
  }

  return (
    <ActionPopover
      title={t("x.table.style")}
      open={open}
      onOpenChange={setOpen}
      icon="Table"
    >
      <div className="x-flex x-flex-col x-items-center x-justify-center">
        <div className="x-flex x-space-x-0.5">
          {generateArray(GRID_ROW).map((row) => (
            <div key={row} className="x-space-y-0.5">
              {generateArray(GRID_COL).map((col) => (
                <div
                  key={`${row}-${col}`}
                  className={cn(
                    "x-size-5 x-border x-rounded x-transition-all",
                    col <= grid[1] && row <= grid[0] && "x-bg-primary"
                  )}
                  onMouseOver={() => setGrid([row, col])}
                  onMouseDown={() => {
                    onCreateTable();
                    setGrid([0, 0]);
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <p>
          {grid[0]}x{grid[1]}
        </p>
      </div>
    </ActionPopover>
  );
};

export default TableComponent;
