import clsx from "clsx";

import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
} from "react";

import { extractSprinklesProps } from "../../../extract-sprinkles-props";
import { type Sprinkles, sprinkles } from "../../../sprinkles.css";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<Tag extends ElementType, Props> = keyof (AsProp<Tag> & Props);

type PolymorphicBoxProps<
  Tag extends ElementType,
  Props = {},
> = PropsWithChildren<Props & AsProp<Tag>> &
  Omit<ComponentPropsWithRef<Tag>, PropsToOmit<Tag, Props>>;

type PolymorphicRef<Tag extends ElementType> =
  ComponentPropsWithRef<Tag>["ref"];

type PolymorphicBoxPropsWithRef<
  Tag extends ElementType,
  Props = {},
> = PolymorphicBoxProps<Tag, Props> & {
  ref?: PolymorphicRef<Tag>;
};

export type IBoxProps<Tag extends ElementType = "div"> =
  PolymorphicBoxPropsWithRef<Tag, {}> & Sprinkles;

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
