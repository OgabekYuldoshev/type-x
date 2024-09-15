import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "x-z-[999999] x-w-72 x-rounded-md x-border x-bg-popover x-p-2 x-text-popover-foreground x-shadow-md x-outline-none data-[state=open]:x-animate-in data-[state=closed]:x-animate-out data-[state=closed]:x-fade-out-0 data-[state=open]:x-fade-in-0 data-[state=closed]:x-zoom-out-95 data-[state=open]:x-zoom-in-95 data-[side=bottom]:x-slide-in-from-top-2 data-[side=left]:x-slide-in-from-right-2 data-[side=right]:x-slide-in-from-left-2 data-[side=top]:x-slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
