import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "./utils";

const typographyVariants = cva("", {
  variants: {
    intent: {
      heading: "font-semibold text-[64px] leading-[1.875]",
      subheadding1: "font-semibold text-[32px] leading-[1.25]",
      subheadding2: "font-semibold text-2xl leading-[28px]",
      label1: "font-medium text-lg leading-[1.25]",
      label2: "font-medium text-base leading-[1.25]",
      paragraph1: "font-normal text-lg leading-[1.25]",
      paragraph2: "font-normal text-base leading-[1.25]",
    },
  },
  defaultVariants: {
    intent: "paragraph1",
  },
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
