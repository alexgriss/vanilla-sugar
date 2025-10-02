import { Flex } from "../flex/flex";
import type { IHStackProps } from "./types";

export const HStack = (props: IHStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const hStackProps = {
    ...restProps,
    gap: spacing || restProps.gap,
    className,
  };

  return <Flex {...hStackProps}>{children}</Flex>;
};
