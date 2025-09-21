import { vars } from "../../../theme.css";
import { Flex, type IFlexProps } from "../flex";

export interface IVStackProps extends IFlexProps {
  spacing?: keyof typeof vars.spacings;
}

export const VStack = (props: IVStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const vStackProps = {
    ...restProps,
    gap: spacing,
    fd: "column" as const,
    className,
  };

  return <Flex {...vStackProps}>{children}</Flex>;
};
