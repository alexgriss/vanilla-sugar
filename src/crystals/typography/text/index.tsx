import { type ElementType } from "react";

import { Box, type IBoxProps } from "../../layout";

export interface ITextProps extends IBoxProps<ElementType> {}

export const Text = (props: ITextProps) => {
  const { className, children, as = "p", ...restProps } = props;
  const textProps = {
    ...restProps,
    as,
    className,
  };

  return <Box {...textProps}>{children}</Box>;
};
