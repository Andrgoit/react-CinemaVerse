import { IoMenu } from "react-icons/io5";
import styles from "./BurgerButton.module.css";

export default function BurgerButton({ openMenu }) {
  return (
    <button type="button" className={styles.burgerBtn} onClick={openMenu}>
      <IoMenu size={22} />
    </button>
  );
}
