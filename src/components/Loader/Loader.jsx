import { createPortal } from "react-dom";
import loaderImg from "@/assets/img/loader.png";
import styles from "./Loader.module.css";

export default function Loader() {
  const root = document.getElementById("modal");

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={loaderImg} alt="loader icon" className={styles.img} />
      </div>
    </div>,
    root,
  );
}
