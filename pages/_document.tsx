import { Html, Head, Main, NextScript } from "next/document";

// Runs before hydration and before first paint, so the correct theme class
// is already on <html> by the time anything renders — no light-theme flash.
// Keep in sync with getInitialTheme() in components/ToogleTheme/ThemeContext.jsx.
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('color-theme');var t=(s==='light'||s==='dark')?s:'dark';document.documentElement.classList.remove('light','dark');document.documentElement.classList.add(t);}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
