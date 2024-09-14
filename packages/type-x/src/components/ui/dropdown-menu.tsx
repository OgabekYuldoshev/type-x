import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "x-flex x-cursor-default x-select-none x-items-center x-rounded-sm x-px-2 x-py-1.5 x-text-sm x-outline-none focus:x-bg-accent data-[state=open]:x-bg-accent",
      inset && "x-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="x-ml-auto x-h-4 x-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "x-z-50 x-min-w-[8rem] x-overflow-hidden x-rounded-md x-border x-bg-popover x-p-1 x-text-popover-foreground x-shadow-lg data-[state=open]:x-animate-in data-[state=closed]:x-animate-out data-[state=closed]:x-fade-out-0 data-[state=open]:x-fade-in-0 data-[state=closed]:x-zoom-out-95 data-[state=open]:x-zoom-in-95 data-[side=bottom]:x-slide-in-from-top-2 data-[side=left]:x-slide-in-from-right-2 data-[side=right]:x-slide-in-from-left-2 data-[side=top]:x-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "x-z-50 x-min-w-[8rem] x-overflow-hidden x-rounded-md x-border x-bg-popover x-p-1 x-text-popover-foreground x-shadow-md",
        "data-[state=open]:x-animate-in data-[state=closed]:x-animate-out data-[state=closed]:x-fade-out-0 data-[state=open]:x-fade-in-0 data-[state=closed]:x-zoom-out-95 data-[state=open]:x-zoom-in-95 data-[side=bottom]:x-slide-in-from-top-2 data-[side=left]:x-slide-in-from-right-2 data-[side=right]:x-slide-in-from-left-2 data-[side=top]:x-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "x-relative x-flex x-cursor-default x-select-none x-items-center x-rounded-sm x-px-2 x-py-1.5 x-text-sm x-outline-none x-transition-colors focus:x-bg-accent focus:x-text-accent-foreground data-[disabled]:x-pointer-events-none data-[disabled]:x-opacity-50",
      inset && "x-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "x-relative x-flex x-cursor-default x-select-none x-items-center x-rounded-sm x-py-1.5 x-pl-8 x-pr-2 x-text-sm x-outline-none x-transition-colors focus:x-bg-accent focus:x-text-accent-foreground data-[disabled]:x-pointer-events-none data-[disabled]:x-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="x-absolute x-left-2 x-flex x-h-3.5 x-w-3.5 x-items-center x-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="x-h-4 x-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "x-relative x-flex x-cursor-default x-select-none x-items-center x-rounded-sm x-py-1.5 x-pl-8 x-pr-2 x-text-sm x-outline-none x-transition-colors focus:x-bg-accent focus:x-text-accent-foreground data-[disabled]:x-pointer-events-none data-[disabled]:x-opacity-50",
      className
    )}
    {...props}
  >
    <span className="x-absolute x-left-2 x-flex x-h-3.5 x-w-3.5 x-items-center x-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="x-h-4 x-w-4 x-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "x-px-2 x-py-1.5 x-text-sm x-font-semibold",
      inset && "x-pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("x--mx-1 x-my-1 x-h-px x-bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("x-ml-auto x-text-xs x-tracking-widest x-opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
