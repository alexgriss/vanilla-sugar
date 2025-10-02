import { Box } from "../box/box";
import type { IFlexProps } from "./types";

export const Flex = (props: IFlexProps) => {
  const { className, children, ...restProps } = props;

  const flexProps = {
    ...restProps,
    display: "flex" as const,
    className,
  };

  return (
    <Box ai="start" jc="start" {...flexProps}>
      {children}
    </Box>
  );
};
