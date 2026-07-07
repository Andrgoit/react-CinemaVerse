import styles from "./FilmRuntime.module.css";
export default function FilmRuntime({ runtime }) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;
  return (
    <div className={styles.wrapper}>
      <span>{hours}h</span>
      <span>{minutes}m</span>
    </div>
  );
}
