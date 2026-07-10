import { IoSearch } from "react-icons/io5";
import styles from "./SearchBlock.module.css";

export default function SearchBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <span>
          <IoSearch size={22} color={`var(--color-text)`} />
        </span>
        <input
          type="text"
          className={styles.input}
          placeholder="Search movie..."
        />
      </div>
    </div>
  );
}
