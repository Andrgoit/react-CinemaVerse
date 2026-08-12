import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ closeMenu }) {
  const root = document.getElementById("modal");

  const close = (event) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      closeMenu();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={close}>
      <div className={styles.contentWrapper}>
        <button className={styles.closeButton} onClick={closeMenu}>
          <IoClose size={22} />
        </button>
      </div>
    </div>,
    root,
  );
}
