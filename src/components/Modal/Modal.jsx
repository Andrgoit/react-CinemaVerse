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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const modalRoot = document.getElementById("modal");
  return createPortal(
    <div className={styles.backdropWrapper} onClick={closeModal}>
      <div
        className={styles.contentWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={close} className={styles.closeButton}>
          <IoCloseCircleOutline size={28} />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
}
