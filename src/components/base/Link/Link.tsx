import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const linkVariants = cva(" ", {
  variants: {
    variant: {
      buttonPrimary:
        "p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100",
      buttonSecondary:
        "p-2 rounded-lg border-1 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800",
    },
  },
  defaultVariants: {
    variant: "buttonPrimary",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ variant, className, ...props }, ref) => {
    const componentProps = {
      className: cn(linkVariants({ variant, className })),
      ...props,
      ref,
    };

    return React.createElement("a", componentProps);
  },
);

Link.displayName = "Link";

export default Link;
