import "../styles/css/index.css"
import Head from "next/head";

export default function App({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Sobek, Front-end Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
