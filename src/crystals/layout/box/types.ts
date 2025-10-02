import type {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";
import type { Sprinkles } from "../../../sprinkles.css";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<Tag extends ElementType, Props> = keyof (AsProp<Tag> & Props);

type PolymorphicBoxProps<
  Tag extends ElementType,
  Props = {},
> = PropsWithChildren<Props & AsProp<Tag>> &
  Omit<ComponentPropsWithRef<Tag>, PropsToOmit<Tag, Props>>;

export type PolymorphicRef<Tag extends ElementType> =
  ComponentPropsWithRef<Tag>["ref"];

type PolymorphicBoxPropsWithRef<
  Tag extends ElementType,
  Props = {},
> = PolymorphicBoxProps<Tag, Props> & {
  ref?: PolymorphicRef<Tag>;
};

export type IBoxProps<Tag extends ElementType = "div"> =
  PolymorphicBoxPropsWithRef<Tag, {}> & Sprinkles;
