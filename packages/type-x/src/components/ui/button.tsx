import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "x-inline-flex x-items-center x-justify-center x-whitespace-nowrap x-rounded-md x-text-sm x-font-medium x-transition-colors focus-visible:x-outline-none focus-visible:x-ring-1 focus-visible:x-ring-ring disabled:x-pointer-events-none disabled:x-opacity-50",
  {
    variants: {
      variant: {
        default: "x-bg-primary x-text-primary-foreground x-shadow hover:x-bg-primary/90",
        destructive: "x-bg-destructive x-text-destructive-foreground x-shadow-sm hover:x-bg-destructive/90",
        outline: "x-border x-border-input x-bg-background x-shadow-sm hover:x-bg-accent hover:x-text-accent-foreground",
        secondary: "x-bg-secondary x-text-secondary-foreground x-shadow-sm hover:x-bg-secondary/80",
        ghost: "hover:x-bg-accent hover:x-text-accent-foreground",
        link: "x-text-primary x-underline-offset-4 hover:x-underline",
      },
      size: {
        default: "x-h-9 x-px-4 x-py-2",
        sm: "x-h-8 x-rounded-md x-px-3 x-text-xs",
        lg: "x-h-10 x-rounded-md x-px-8",
        icon: "x-h-9 x-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
