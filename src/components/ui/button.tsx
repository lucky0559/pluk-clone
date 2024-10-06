import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-secondaryCustom text-secondaryFont text-[15px] hover:bg-secondaryCustom/85 shadow",
        defaultWithIcon:
          "bg-secondaryCustom text-secondaryFont text-[15px] hover:bg-secondaryCustom/85 p-5 shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-primaryCustom text-mainFont hover:bg-primaryCustom/85",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        secondaryWithIcon:
          "bg-mainFont text-primaryCustom text-[15px] hover:bg-mainFont/85 p-5 shadow",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "w-[372] h-[52] px-3 rounded-3xl text-[15px]",
        defaultWithIcon:
          "w-[372] h-[52] px-3 rounded-3xl text-[15px] font-semibold",
        defaultSecondaryIcon:
          "w-[372] h-[52] px-3 rounded-3xl text-[15px] font-semibold",
        sm: "w-[132px] h-10 rounded-3xl px-3 text-sm",
        lg: "h-11 rounded-md rounded-3xl px-8",
        icon: "h-10 w-10 rounded-3xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
