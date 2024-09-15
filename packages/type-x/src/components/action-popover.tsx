import { Button } from "./ui/button";
import type React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { icons } from "lucide-react";

interface Props {
  title?: string;
  icon: keyof typeof icons;
  open?: boolean;
  onOpenChange?(value: boolean): void;
  onActive?: () => boolean;
}
const ActionPopover = ({ onActive, title, icon, children, open, onOpenChange }: React.PropsWithChildren<Props>) => {
  const Icon = icons[icon];
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button variant={onActive?.() ? "secondary" : "outline"} size="icon" title={title}>
          <Icon size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="x-p-2 x-gap-x-2 x-inline-flex x-w-fit">{children}</PopoverContent>
    </Popover>
  );
};

export default ActionPopover;
