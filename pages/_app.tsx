import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/constants.scss";

export default function PorfolioStephen({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
