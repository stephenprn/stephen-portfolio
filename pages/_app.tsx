import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/constants.scss";
import Head from "next/head";

export default function PorfolioStephen({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stephen Perrin | développeur full-stack</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta
          name="description"
          content="Freelance spécialisé sur les technologies React / React native / Angular et Python / Node."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
