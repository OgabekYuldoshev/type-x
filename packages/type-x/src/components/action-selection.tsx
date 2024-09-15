import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { GeneralActionProps } from "@/types";
import { Button } from "./ui/button";
import { icons } from "lucide-react";
import { useMemo } from "react";

type ActionSelectionItem = {
  title: string;
  icon: keyof typeof icons;
  disabled: boolean;
  onActive: () => boolean;
  onAction: () => void;
};

export const createActionSelection = (
  callback: (options: GeneralActionProps) => ActionSelectionItem[]
) => {
  return (options: GeneralActionProps) => {
    const props = callback(options);
    const active = useMemo<ActionSelectionItem>(() => {
      const activeElement: any = props.find((item) => item.onActive());

      if (activeElement && !activeElement.default) {
        return {
          ...activeElement,
        };
      }

      return {
        title: "No active action",
        icon: "Info",
        disabled: false,
        onActive: () => false,
        onAction: () => {},
      };
    }, [props]);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {active.title} <icons.ChevronsUpDown size={18} className="x-ml-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full max-w-[300px]">
          {props.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <DropdownMenuItem
                key={item.title + index}
                onClick={item.onAction}
                className="x-flex x-justify-between x-gap-x-2"
              >
                <div className="x-inline-flex">
                  <Icon size={18} className="x-mr-2" />
                  {item.title}
                </div>
                {active.title === item.title && (
                  <icons.Check size={18} className="x-ml-6 x-items-end" />
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
};
