import type { AppProps } from "next/app";
import { globalStyles } from "@src/styles/global.css";
import { Header } from "@src/components/Header";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
