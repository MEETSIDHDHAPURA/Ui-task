import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState("light");
  const DarkMode = darkMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(DarkMode);
    root.classList.add(darkMode);
  }, [DarkMode, darkMode]);

  return {setDarkMode, DarkMode};
};

export default useDarkMode;
