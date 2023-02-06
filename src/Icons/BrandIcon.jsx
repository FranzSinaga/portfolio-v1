// import { getInitialTheme } from "../components/ToogleTheme/ThemeContext";
import Image from "next/image";
import { ThemeContext } from "../../components/ToogleTheme/ThemeContext";
import React from "react";
const Logo = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return theme === "dark" ? (
    <Image src="/logo-white.png" width={85} height={40} alt="Franz Sinaga" />
  ) : (
    <Image src="/logo-black.png" width={85} height={40} alt="Franz Sinaga" />
  );
};

export default Logo;
