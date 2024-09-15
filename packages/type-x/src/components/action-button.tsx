import { icons } from "lucide-react";
import { Button, type ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import type { GeneralActionProps } from "@/types";

interface Props extends Omit<ButtonProps, "children"> {
  icon: keyof typeof icons;
  onActive?: () => boolean;
}

export const ActionButtons = ({ icon, onActive, variant = "outline", ...props }: Props) => {
  const CustomIcon = icons[icon];
  return (
    <Button
      size={"icon"}
      variant={onActive?.() ? "secondary" : variant}
      className={cn("x-h-7 x-w-7", props.className)}
      {...props}
    >
      <CustomIcon size={18} />
    </Button>
  );
};

export const createActionButtons = (
  callback: (p: GeneralActionProps) => React.ComponentProps<typeof ActionButtons>[],
) => {
  return (p: GeneralActionProps) => {
    const props = callback(p);
    const components = props.map((prop) => <ActionButtons key={prop.icon} {...prop} />);

    (components as any).getProps = () => props;

    return components as JSX.Element[] & {
      getProps: () => React.ComponentProps<typeof ActionButtons>[];
    };
  };
};
