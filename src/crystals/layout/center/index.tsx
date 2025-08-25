import { Flex, type IFlexProps } from "../flex";

export interface ICenterProps extends IFlexProps {
  size?: string;
}

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
