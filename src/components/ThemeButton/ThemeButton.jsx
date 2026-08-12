import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
  }, [theme]);

  const themeChanger = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      type="button"
      onClick={themeChanger}
      className={styles.themeButton}
      title="Chose theme"
    >
      {theme === "dark" ? (
        <IoMoon size={22} />
      ) : (
        <IoSunny size={22} color={`var(--color-accent)`} />
      )}
    </button>
  );
}
