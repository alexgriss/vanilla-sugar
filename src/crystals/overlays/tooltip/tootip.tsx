import {
  autoUpdate,
  arrow as flArrow,
  offset as flOffset,
  flip,
  shift,
  useFloating,
  type Placement,
} from "@floating-ui/react";
import clsx from "clsx";
import {
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { Box } from "../../layout";
import { type ITooltipProps } from "./types";

import {
  tooltipArrowBottomStyles,
  tooltipArrowLeftStyles,
  tooltipArrowRightStyles,
  tooltipArrowStyles,
  tooltipArrowTopStyles,
  tooltipStyles,
} from "./tooltip.css";

const getArrowClass = (placement: Placement) => {
  const basePlacement = placement.split("-")[0] as
    | "top"
    | "right"
    | "bottom"
    | "left";

  switch (basePlacement) {
    case "top":
      return tooltipArrowTopStyles;
    case "bottom":
      return tooltipArrowBottomStyles;
    case "left":
      return tooltipArrowLeftStyles;
    case "right":
      return tooltipArrowRightStyles;
    default:
      return tooltipArrowTopStyles;
  }
};

export const Tooltip = (props: ITooltipProps) => {
  const {
    children,
    tooltip,
    placement = "top",
    showArrow = true,
    disabled = false,
    allowFlip = true,
    ...restProps
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const arrowRef = useRef<HTMLDivElement | null>(null);

  const middleware = [
    flOffset(8),
    ...(allowFlip ? [flip()] : []),
    shift({ padding: 8 }),
    flArrow({ element: arrowRef }),
  ];

  const {
    x,
    y,
    strategy,
    refs,
    update,
    placement: currentPlacement,
    middlewareData: { arrow },
  } = useFloating({
    placement,
    middleware,
    whileElementsMounted: autoUpdate,
    strategy: "fixed",
  });

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;

    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    update?.();
  }, [isVisible, update, placement]);

  const triggerElement = cloneElement(children, {
    ref: refs.setReference,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  } as any);

  const basePlacement = currentPlacement.split("-")[0] as
    | "top"
    | "right"
    | "bottom"
    | "left";

  const oppositePlacement = useMemo(() => {
    return {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[basePlacement];
  }, [basePlacement]);

  const portalContainer =
    typeof document !== "undefined" ? document.body : null;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {triggerElement}

      {isVisible &&
        portalContainer &&
        createPortal(
          <Box
            ref={refs.setFloating}
            className={tooltipStyles}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 1000,
              ...restProps.style,
            }}
            {...restProps}
          >
            {tooltip}

            {showArrow && (
              <div
                ref={arrowRef}
                className={clsx(
                  tooltipArrowStyles,
                  getArrowClass(basePlacement),
                )}
                style={{
                  left: arrow?.x ? `${arrow.x}px` : "",
                  top: arrow?.y ? `${arrow.y}px` : "",
                  [oppositePlacement]: "-4px",
                  transform: "none",
                }}
              />
            )}
          </Box>,
          portalContainer,
        )}
    </div>
  );
};
