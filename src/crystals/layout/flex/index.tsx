import { Box, type IBoxProps } from "../box";

export interface IFlexProps extends IBoxProps {}

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
