import "../styles/css/index.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>David's Portfolio</title>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <meta
          name="description"
          content="A Young Software Developer living in Poland. Highly interested in optimization
          and new technologies. This website provides brief information about me as well as some
          of the projects i have done and the technologies im working with."
        />
        <meta name="keywords" content="portfolio, front-end, developer, modern, react, dev" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="A Young Software Developer living in Poland. Highly interested in optimization
          and new technologies."
        />
        <meta name="theme-color" content="#263238" />
        <meta property="og:title" content="David's Portfolio" />
        <meta property="og:image" content="https://www.sobekcore.com/og-image.png" />
        <meta property="og:url" content="https://www.sobekcore.com" />
        <meta property="og:locale" content="en_US" />
        <style></style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
