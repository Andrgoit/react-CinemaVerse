import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

import langIcons from "@/data/langIcons";

import styles from "./LanguageButton.module.css";

export default function LanguageButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

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
      <img src={icon} alt={`${lang} language icon`} />
    </li>
  ));

  return (
    <div className="relative">
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
