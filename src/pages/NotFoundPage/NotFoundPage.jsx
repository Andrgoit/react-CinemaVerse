import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Page Not Found</h2>
      <Link to={"/"} className={styles.link}>
        Home
      </Link>
    </div>
  );
}
