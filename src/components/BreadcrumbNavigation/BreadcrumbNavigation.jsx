import { Link } from "react-router-dom";
import styles from "./BreadcrumbNavigation.module.css";

export default function BreadcrumbNavigation() {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.link}>
        <span> &gt;</span> Home
      </Link>
    </div>
  );
}
