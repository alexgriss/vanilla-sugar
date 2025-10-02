import type { vars } from "../../../theme.css";
import type { IFlexProps } from "../flex";

export interface IVStackProps extends IFlexProps {
  /** Spacing between items (gap property alias) */
  spacing?: keyof typeof vars.spacings;
}
