import SkeletonProvider from "react-loading-skeleton";
import type { SkeletonProps, SkeletonStyleProps } from "react-loading-skeleton";
interface propsSkeleton extends SkeletonProps, SkeletonStyleProps {
  state: unknown;
  children: React.ReactNode;
  theme?: "white" | "dark";
}
export function Skeleton({
  theme = "dark",
  state,
  children,
  ...rest
}: propsSkeleton) {
  const isWhite = theme === "white";
  return state ? (
    <>{children}</>
  ) : (
    <SkeletonProvider
      {...rest}
      baseColor={isWhite ? "#e0e0e0" : "#2D3439"}
      highlightColor={isWhite ? "#aaaaaa" : "#75808A"}
    />
  );
}
