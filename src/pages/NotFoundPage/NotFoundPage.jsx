import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import img320 from "@/assets/img/404_320.png";
import img640 from "@/assets/img/404_640.png";
import img768 from "@/assets/img/404_768.png";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <picture>
            <source media="(min-width: 768px)" srcSet={img768} />
            <source media="(min-width: 640px)" srcSet={img640} />
            <img src={img320} alt="Page not found" />
          </picture>
        </div>
        <Link to={"/"} className={styles.link}>
          Home
        </Link>
      </div>
    </div>
  );
}
