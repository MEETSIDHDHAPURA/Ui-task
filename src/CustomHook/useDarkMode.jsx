import { useEffect, useState } from "react";

const useDarkMode = () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    savedDarkMode ? JSON.parse(savedDarkMode) : false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
