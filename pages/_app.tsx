import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/NavBar/Nav";
import Script from "next/script";
import { ThemeProvider } from "../components/ToogleTheme/ThemeContext";
import Background from "../components/ToogleTheme/Background";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Background>
        <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
        <Nav />
        <Component {...pageProps} />
      </Background>
    </ThemeProvider>
  );
}

export default MyApp;
