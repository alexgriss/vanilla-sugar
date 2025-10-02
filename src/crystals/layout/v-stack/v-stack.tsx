import { Flex } from "../flex/flex";
import type { IVStackProps } from "./types";

export const VStack = (props: IVStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const vStackProps = {
    ...restProps,
    gap: spacing,
    fd: "column" as const,
    width: "full" as const,
    className,
  };

  return <Flex {...vStackProps}>{children}</Flex>;
};
