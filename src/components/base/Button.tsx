import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "p-2 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-black text-white enabled:hover:bg-gray-800 enabled:active:bg-gray-800 enabled:focus:bg-gray-800 hover:bg-gray-800",
        secondary:
          "border-1 border-black enabled:hover:bg-gray-100 enabled:active:bg-gray-100 enabled:focus:bg-gray-100 hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: string;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ variant, className, as, ...props }, ref) => {
    const componentProps = {
      className: cn(buttonVariants({ variant, className })),
      ...props,
      ref,
    };

    if (as === "a") {
      return React.createElement(as, componentProps);
    }
    return React.createElement("button", componentProps);
  }
);

Button.displayName = "Button";

export default Button;
