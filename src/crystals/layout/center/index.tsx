import { Flex, type IFlexProps } from "../flex";

export interface ICenterProps extends IFlexProps {
  size?: string;
  h?: string;
  w?: string;
}

export const Center = (props: ICenterProps) => {
  const { className, children, size, h, w, ...restProps } = props;

  const centerProps = {
    ...restProps,
    ai: "center" as const,
    jc: "center" as const,
    style: {
      height: size || h,
      width: size || w,
    },
    className,
  };

  return <Flex {...centerProps}>{children}</Flex>;
};
