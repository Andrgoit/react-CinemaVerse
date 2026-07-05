import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

import styles from "./Modal.module.css";

export default function Modal({ children, close }) {
  const closeModal = (event) => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      close();
    }
  };

  useEffect(() => {
    const EscapeModalClose = (e) => {
      if (e.code === "Escape") close();
    };
    window.addEventListener("keydown", EscapeModalClose);
    return () => window.removeEventListener("keydown", EscapeModalClose);
  }, [close]);

  const modalRoot = document.getElementById("modal");
  return createPortal(
    <div className={styles.backdropWrapper} onClick={(e) => closeModal(e)}>
      <div className={styles.contentWrapper}>
        <button onClick={close} className={styles.closeButton}>
          <IoCloseCircleOutline />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}
