import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/NavBar/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
      <Head>
        <script src="https://kit.fontawesome.com/ab123fe2d6.js" crossOrigin="anonymous"></script>
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
