import { Flex, type FlexProps } from "../flex";

export interface CenterProps extends FlexProps {
  size?: string;
  h?: string;
  w?: string;
}

export const Center = (props: CenterProps) => {
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
