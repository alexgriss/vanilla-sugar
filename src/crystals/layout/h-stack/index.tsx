import { vars } from "../../../theme.css";
import { Flex, type IFlexProps } from "../flex";

export interface IHStackProps extends IFlexProps {
  spacing?: keyof typeof vars.spacings;
}

export const HStack = (props: IHStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const hStackProps = {
    ...restProps,
    gap: spacing || restProps.gap,
    className,
  };

  return <Flex {...hStackProps}>{children}</Flex>;
};
