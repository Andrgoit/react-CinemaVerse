import styles from "./LibraryChoseButtonBlock.module.css";
export default function LibraryChoseButtonBlock({ choseHandler, chosenList }) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => choseHandler("w")}
        className={`${styles.button} ${chosenList === "w" ? styles.chosen : ""}`}
      >
        Watchlist
      </button>
      <button
        type="button"
        onClick={() => choseHandler("f")}
        className={`${styles.button} ${chosenList === "f" ? styles.chosen : ""}`}
      >
        Favoritelist
      </button>
    </div>
  );
}
