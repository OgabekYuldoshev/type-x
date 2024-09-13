import { icons } from "lucide-react"
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props extends Omit<ButtonProps, 'children' | 'variant'> {
  icon: keyof typeof icons
  onActive?: () => boolean
}

export const ActionButtons = ({ icon, onActive, ...props }: Props) => {
  const CustomIcon = icons[icon]
  return (
    <Button size={"icon"} variant={onActive?.() ? "secondary" : "outline"} className={cn("x-h-7 x-w-7", props.className)} {...props}>
      <CustomIcon size={18} />
    </Button>
  );
};

