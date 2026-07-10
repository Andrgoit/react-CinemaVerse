import { IoMenu } from "react-icons/io5";
import styles from "./BurgerButton.module.css";

export default function BurgerButton() {
  return (
    <button type="button" className={styles.burgerBtn}>
      <IoMenu size={22} />
    </button>
  );
}
