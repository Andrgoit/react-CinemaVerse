import { IoSearch } from "react-icons/io5";
import styles from "./SearchBlock.module.css";
import { useState } from "react";

export default function SearchBlock({ onchange }) {
  const [q, setQ] = useState("");

  const submitHandler = (e) => {
    if (q === "") {
      e.preventDefault();
      return null;
    }
    e.preventDefault();
    onchange(q);
    setQ("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <span>
          <IoSearch size={22} color={`var(--color-text)`} />
        </span>
        <form onSubmit={submitHandler} className="w-full">
          <input
            type="text"
            value={q}
            className={styles.input}
            placeholder="Search movie..."
            onChange={(e) => setQ(e.target.value.trim())}
          />
        </form>
      </div>
    </div>
  );
}
