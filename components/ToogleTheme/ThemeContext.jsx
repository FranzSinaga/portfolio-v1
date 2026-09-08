import React from "react";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (storedPrefs === "light" || storedPrefs === "dark") {
      return storedPrefs;
    }
  }

  return "dark"; // dark theme is the default
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  // Starts at "dark" so server and client agree on the first render. The
  // blocking script in pages/_document.tsx already applied the real theme
  // to <html> before paint, so React just catches up silently on mount.
  const [theme, setTheme] = React.useState("dark");

  const applyTheme = (rawTheme) => {
    const root = window.document.documentElement;
    root.classList.remove(rawTheme === "dark" ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
    setTheme(rawTheme);
  };

  React.useEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
