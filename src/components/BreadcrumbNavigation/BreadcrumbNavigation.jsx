import { useParams, Link } from "react-router-dom";
import styles from "@/components/BreadcrumbNavigation/BreadcrumbNavigation.module.css";

export default function BreadcrumbNavigation({ movieTitle }) {
  const { category, movie_id = null } = useParams();
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link to={"/"}>Home</Link> <span> &gt;</span>
        </li>

        {!movie_id ? (
          <li>
            <span>{category}</span>
          </li>
        ) : (
          <li>
            <Link to={category}>{category}</Link> <span> &gt;</span>
          </li>
        )}
        {movie_id && (
          <li>
            <span> {movieTitle}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
