import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../src/components/NavBar/Nav";
import Head from "next/head";
import { ThemeProvider } from "../src/components/ToogleTheme/ThemeContext";
import Background from "../src/components/ToogleTheme/Background";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Background>
        <Head>
          <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
        </Head>
        <Nav />
        <Component {...pageProps} />
      </Background>
    </ThemeProvider>
  );
}

export default MyApp;
