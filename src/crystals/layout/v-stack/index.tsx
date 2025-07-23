import { Flex, type FlexProps } from "../flex";

import { vars } from "../../../theme.css";

export interface VStackProps extends FlexProps {
  spacing?: keyof typeof vars.spacings;
}

export const VStack = (props: VStackProps) => {
  const { className, children, spacing, ...restProps } = props;

  const vStackProps = {
    ...restProps,
    gap: spacing,
    fd: "column" as const,
    className,
  };

  return <Flex {...vStackProps}>{children}</Flex>;
};
