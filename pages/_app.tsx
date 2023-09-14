import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/constants.scss";
import Head from "next/head";

export default function PorfolioStephen({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stephen Perrin portfolio</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
        <meta name="description" content="Le portfolio de Stephen Perrin" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
