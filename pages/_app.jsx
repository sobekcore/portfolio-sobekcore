import Head from "next/head";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dave's Personal Website</title>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <meta
          name="description"
          content="I'm a software developer which focuses on detailed work. Highly interested in
          optimization and new technologies. Making stuff just right."
        />
        <meta name="keywords" content="portfolio, frontend, developer, modern, react, vue, dev" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="I'm a software developer which focuses on detailed work. Highly interested in
          optimization and new technologies. Making stuff just right."
        />
        <meta name="theme-color" content="#263238" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dave's Personal Website" />
        <meta property="og:image" content="https://www.sobekcore.com/og-image.png" />
        <meta property="og:url" content="https://www.sobekcore.com" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
