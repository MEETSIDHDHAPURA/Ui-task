import { useEffect, useState } from "react";

const useDarkMode = () => {
  // this is use for darkMode and LightMode
  const [darkMode, setDarkMode] = useState("light");

  // if the darkMode is set then switch to the light mode and is the light mode is set switch to the darkmode
  const DarkMode = darkMode === "dark" ? "light" : "dark";

  // this UseEffect use for add the darkmode and and remove the darkmode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(DarkMode);
    root.classList.add(darkMode);
  }, [DarkMode, darkMode]);

  return { setDarkMode, DarkMode };
};

export default useDarkMode;
