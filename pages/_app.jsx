import "../styles/css/index.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sobek, Front-end Developer</title>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
