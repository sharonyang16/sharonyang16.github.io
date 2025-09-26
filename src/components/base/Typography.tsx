import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const typographyVariants = cva("", {
  variants: {
    intent: {
      heading: "font-semibold",
      subheadding: "font-semibold",
      label: "font-medium",
      paragraph: "font-normal",
    },
    size: {
      small: "text-base leading-[1.25]",
      medium: "text-lg leading-[1.25]",
    },
  },
  defaultVariants: {
    intent: "paragraph",
    size: "medium",
  },
  compoundVariants: [
    {
      intent: "heading",
      size: "small",
      className: "text-5xl leading-[1.25]",
    },
    {
      intent: "heading",
      size: "medium",
      className: "text-[64px] leading-[1.875]",
    },
    {
      intent: "subheadding",
      size: "small",
      className: "text-2xl leading-[28px]",
    },
    {
      intent: "subheadding",
      size: "medium",
      className: "text-[32px] leading-[1.25]",
    },
  ],
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ intent, className, as, ...props }, ref) => {
    const Component = as || "span";

    const componentProps = {
      className: cn(typographyVariants({ intent, className })),
      ...props,
      ref,
    };

    return React.createElement(Component, componentProps);
  }
);

Typography.displayName = "Typography";

export default Typography;
