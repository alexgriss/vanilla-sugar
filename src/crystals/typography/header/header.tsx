import clsx from "clsx";

import { Text } from "../text/text";

import { headerVariants } from "./header.css";
import type { IHeaderProps } from "./types";

export const Header = (props: IHeaderProps) => {
  const { className, children, as = "h1", ...restProps } = props;

  const headerClassName = headerVariants[as];

  const headerProps = {
    ...restProps,
    as,
    className: clsx(className, headerClassName),
  };

  return <Text {...headerProps}>{children}</Text>;
};
