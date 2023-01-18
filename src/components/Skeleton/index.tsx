import SkeletonProvider from "react-loading-skeleton";
import type { SkeletonProps, SkeletonStyleProps } from "react-loading-skeleton";
interface propsSkeleton extends SkeletonProps, SkeletonStyleProps {
  state: unknown;
  children: React.ReactNode;
}
export function Skeleton({ state, children, ...rest }: propsSkeleton) {
  return state ? <>{children}</> : <SkeletonProvider {...rest} />;
}
