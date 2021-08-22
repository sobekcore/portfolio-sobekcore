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
          content="Front-end developer portfolio. Contains brief description about me,
          as well as most of the technologies i know, and some of the projects i've made.
          Modern, simple and clear."
        />
        <meta name="keywords" content="portfolio, front-end, developer, modern, react, dev" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Front-end developer portfolio containing information about my person."
        />
        <meta name="theme-color" content="#FF6E80" />
        <meta property="og:title" content="Sobek, Front-end Developer" />
        <meta property="og:image" content="https://www.sobekcore.com/og-image.png" />
        <meta property="og:url" content="https://www.sobekcore.com" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
