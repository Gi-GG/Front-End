import { useEffect, useState } from "react";

type UseDarkModeHook = [boolean, () => void];

const useDarkMode = (): UseDarkModeHook => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // if the theme is not set and the system theme is dark
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
