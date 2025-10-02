import { Flex } from "../flex/flex";
import type { ICenterProps } from "./types";

export const Center = (props: ICenterProps) => {
  const { className, children, ...restProps } = props;

  const centerProps = {
    ...restProps,
    ai: "center" as const,
    jc: "center" as const,
    className,
  };

  return <Flex {...centerProps}>{children}</Flex>;
};
