import { Router } from "next/router";
import type { AppProps } from "next/app";
import { Header } from "@src/components/Header";
import { globalStyles } from "@src/styles/global.css";
import { AuthProvider } from "@src/contexts/auth-context";
import { SkeletonTheme } from "react-loading-skeleton";

import { start, done } from "nprogress";

import "react-loading-skeleton/dist/skeleton.css";
globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => {
    start();
  });

  Router.events.on("routeChangeComplete", () => {
    done();
  });

  return (
    <AuthProvider>
      <SkeletonTheme baseColor="#2D3439" highlightColor="#75808A">
        <Header />
        <Component {...pageProps} />
      </SkeletonTheme>
    </AuthProvider>
  );
}
