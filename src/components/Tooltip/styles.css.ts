import { styled } from "@fivem-shop/react";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: "4px",
  padding: "10px 15px",
  fontSize: "15px",
  lineHeight: 1,
  color: "white",
  backgroundColor: "$blue-500",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$blue-500",
});
