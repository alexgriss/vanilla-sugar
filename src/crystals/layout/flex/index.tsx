import { Box, type BoxProps } from "../box";

export interface FlexProps extends BoxProps {}

export const Flex = (props: FlexProps) => {
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
