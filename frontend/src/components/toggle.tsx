import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const classList = document.documentElement.classList;
    if (classList.contains("dark")) {
      classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-md bg-primary  text-sm shadow-md"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};
