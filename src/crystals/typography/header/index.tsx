import clsx from "clsx";

import type { ITextProps } from "../text";
import { Text } from "../text";

import { headerVariants } from "./header.css";
import type { THeaderTag } from "./types";

export interface IHeaderProps extends ITextProps {
  as?: THeaderTag;
}

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
