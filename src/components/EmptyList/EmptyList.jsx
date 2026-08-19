import img320 from "@/assets/img/noMovies_320.png";
import img640 from "@/assets/img/noMovies_640.png";
import img768 from "@/assets/img/noMovies_768.png";

import styles from "./EmptyList.module.css";

export default function EmptyList() {
  return (
    <div className="container">
      <div className={styles.imageContainer}>
        <picture>
          <source media="(min-width: 768px)" srcSet={img768} />
          <source media="(min-width: 640px)" srcSet={img640} />
          <img
            src={img320}
            alt="Page not found"
            width="320px"
            height="320px"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
}
