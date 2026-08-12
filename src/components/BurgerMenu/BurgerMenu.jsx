import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import {
  UserName,
  LoginButton,
  MyLibraryButton,
  ThemeButton,
  LanguageButton,
} from "@/components";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ closeMenu, isMenuOpen }) {
  const root = document.getElementById("modal");

  const close = (event) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      closeMenu();
    }
  };

  return createPortal(
    <div
      className={`${styles.backdrop} ${isMenuOpen ? styles.isOpen : ""}`}
      onClick={close}
    >
      <div className={styles.contentWrapper}>
        <button className={styles.closeButton} onClick={closeMenu}>
          <IoClose size={22} />
        </button>
        <div className="flex flex-col items-center gap-6">
          <UserName /> <LoginButton />
        </div>
        <div className="flex flex-col items-center gap-6">
          <MyLibraryButton />
          <ThemeButton />
          <LanguageButton />
        </div>
      </div>
    </div>,
    root,
  );
}
