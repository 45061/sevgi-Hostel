import NavBar from "../components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sevgi Sense</title>
        <meta name="Hostal" content="app Sevgi Sense" />
        <link rel="icon" href="/sevgi.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
