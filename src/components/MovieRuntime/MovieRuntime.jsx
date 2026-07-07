import styles from "./MovieRuntime.module.css";

export default function MovieRuntime({ runtime }) {
  if (!runtime) return null;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;
  
  return (
    <div className={styles.wrapper}>
      <span>{hours}h</span>
      <span>{minutes}m</span>
    </div>
  );
}
