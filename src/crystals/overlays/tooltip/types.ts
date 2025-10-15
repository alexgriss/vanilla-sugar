import type { Placement } from "@floating-ui/react";
import type { ReactElement, ReactNode } from "react";
import type { IBoxProps } from "../../layout/box/types";

export interface ITooltipProps extends IBoxProps {
  /** The element that triggers the tooltip */
  children: ReactElement;
  /** The content of the tooltip */
  tooltip: ReactNode;
  /** The placement of the tooltip */
  placement?: Placement;
  /** Whether to show the arrow of the tooltip */
  showArrow?: boolean;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Whether to allow the tooltip to flip */
  allowFlip?: boolean;
}
