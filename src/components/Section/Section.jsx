import { Link } from "react-router-dom";
import styles from "./Section.module.css";

export default function Section({ title = null, category = null, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {title ? <h2>{title}</h2> : null}
        {category ? (
          <Link to={category} className={styles.link}>
            View all
          </Link>
        ) : null}
      </div>
      {children}
    </div>
  );
}
