import * as TooltipR from "@radix-ui/react-tooltip";
import { TooltipArrow, TooltipContent } from "./styles.css";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  backgroundColor?: string;
}

export function Tooltip({ children, content, backgroundColor }: TooltipProps) {
  return (
    <TooltipR.Root>
      <TooltipR.Trigger asChild>{children}</TooltipR.Trigger>
      <TooltipContent
        css={{ backgroundColor }}
        side="top"
        align="center"
        sideOffset={5}
      >
        <span>{content}</span>
        <TooltipArrow css={{ fill: backgroundColor }} />
      </TooltipContent>
    </TooltipR.Root>
  );
}
