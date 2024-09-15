import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "x-flex x-h-9 x-w-full x-rounded-md x-border x-border-input x-bg-transparent x-px-3 x-py-1 x-text-sm x-shadow-sm x-transition-colors file:x-border-0 file:x-bg-transparent file:x-text-sm file:x-font-medium file:x-text-foreground placeholder:x-text-muted-foreground focus-visible:x-outline-none focus-visible:x-ring-1 focus-visible:x-ring-ring disabled:x-cursor-not-allowed disabled:x-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
