import { Box } from "../../layout";
import type { ITextProps } from "./types";

export const Text = (props: ITextProps) => {
  const { className, children, as = "p", ...restProps } = props;
  const textProps = {
    ...restProps,
    as,
    className,
  };

  return <Box {...textProps}>{children}</Box>;
};
