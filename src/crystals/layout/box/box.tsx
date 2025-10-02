import clsx from "clsx";

import { type ElementType, type ForwardedRef, forwardRef } from "react";

import { extractSprinklesProps } from "../../../extract-sprinkles-props";
import { sprinkles } from "../../../sprinkles.css";
import type { IBoxProps, PolymorphicRef } from "./types";

export const Box = forwardRef(
  <Tag extends ElementType = "div">(
    { as, className, children, ...rest }: IBoxProps<Tag>,
    ref?: ForwardedRef<PolymorphicRef<Tag>>,
  ) => {
    const Component = as || "div";

    const [sprinklesProps, restProps] = extractSprinklesProps(rest);

    const boxClassName = clsx(sprinkles(sprinklesProps), className);

    const boxProps = {
      ...restProps,
      className: boxClassName,
      ref,
    };

    return <Component {...boxProps}>{children}</Component>;
  },
);

Box.displayName = "Box";
