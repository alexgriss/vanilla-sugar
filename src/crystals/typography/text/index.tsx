import { type ElementType } from "react";

import { Box, type BoxProps } from "../../layout";

export interface TextProps extends BoxProps<ElementType> {}

export const Text = (props: TextProps) => {
  const { className, children, as = "p", ...restProps } = props;

  const textProps = {
    ...restProps,
    as,
    className,
  };

  return <Box {...textProps}>{children}</Box>;
};
