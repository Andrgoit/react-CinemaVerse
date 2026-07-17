import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage, IoSunny, IoMoon } from "react-icons/io5";
import langIcons from "@/data/langIcons";
import styles from "./SettingsBlock.module.css";

export default function SettingsBlock() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

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

  const languageChanger = (lang) => {
    setIsMenuOpen(false);
    i18n.changeLanguage(lang);
  };

  const elements = langIcons.map(({ lang, icon }) => (
    <li
      key={lang}
      className={styles.languageIconsItem}
      onClick={() => languageChanger(lang)}
    >
      <img src={icon} alt="language icon" />
    </li>
  ));

  return (
    <div className="relative flex items-center gap-3">
      <button
        type="button"
        onClick={themeChanger}
        className={styles.themeButton}
      >
        {theme === "dark" ? (
          <IoMoon size={22} />
        ) : (
          <IoSunny size={22} color={`var(--color-accent)`} />
        )}
      </button>

      <button
        type="button"
        className={styles.languageButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoLanguage size={22} />
      </button>
      {isMenuOpen && <ul className={styles.languageIconsList}>{elements}</ul>}
    </div>
  );
}
