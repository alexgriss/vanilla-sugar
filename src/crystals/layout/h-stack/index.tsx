import { Flex, type FlexProps } from "../flex";

import { vars } from "../../../theme.css";

export interface HStackProps extends FlexProps {
  spacing?: keyof typeof vars.spacings;
}

export const HStack = (props: HStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const hStackProps = {
    ...restProps,
    gap: spacing || restProps.gap,
    className,
  };

  return <Flex {...hStackProps}>{children}</Flex>;
};
