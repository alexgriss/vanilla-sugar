import clsx from "clsx";

import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  forwardRef,
  type ReactNode,
} from "react";

import { extractSprinklesProps } from "../../../extract-sprinkles-props";

import { type Sprinkles, sprinkles } from "../../../sprinkles.css";
import { fullWidthStyle } from "../../../utilities.css";

export type IBoxProps<Tag extends ElementType = "div"> = {
  as?: Tag;
  className?: string | string[];
  children?: ReactNode;
  style?: CSSProperties;
  fullWidth?: boolean;
} & Omit<ComponentPropsWithoutRef<Tag>, "className" | "style" | "children"> &
  Sprinkles;

export const Box = forwardRef(
  <Tag extends ElementType = "div">(
    { as, className, children, fullWidth, ...rest }: IBoxProps<Tag>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const Component = as || "div";

    const [sprinklesProps, restProps] = extractSprinklesProps(rest);

    const boxClassName = clsx(
      sprinkles(sprinklesProps),
      className,
      fullWidth && fullWidthStyle
    );

    const boxProps = {
      ...restProps,
      className: boxClassName,
      ref,
    };

    return <Component {...boxProps}>{children}</Component>;
  }
);

Box.displayName = "Box";
