import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Nav from "../components/NavBar/Nav";
import { ThemeProvider } from "../components/ToogleTheme/ThemeContext";
import Background from "../components/ToogleTheme/Background";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div
        className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-body`}
      >
        <Background>
          <Nav />
          <Component {...pageProps} />
        </Background>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
