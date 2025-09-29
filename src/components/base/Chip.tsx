import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const chipVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-gray-200 rounded-full w-fit py-1 px-2",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ChipProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLElement, ChipProps>(
  ({ variant, className, ...props }, ref) => {
    const componentProps = {
      className: cn(chipVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement("div", componentProps);
  }
);

Chip.displayName = "Chip";

export default Chip;
