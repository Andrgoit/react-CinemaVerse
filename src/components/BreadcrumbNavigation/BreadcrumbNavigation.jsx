import { Link, useParams } from "react-router-dom";
import styles from "./BreadcrumbNavigation.module.css";

export default function BreadcrumbNavigation() {
  const { category } = useParams();

  const titleMaker = (category) => {
    switch (category) {
      case "trending-movies":
        return "Trending now movies";

      case "top-rated-movies":
        return "Top rated movies";

      case "upcoming-movies":
        return "Upcoming movies";

      case "now-playing-movies":
        return "Playing now movies";

      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.link}>
        <span> &gt;</span> Home{" "}
      </Link>
      {category && (
        <>
          <span> &gt; </span>
          {titleMaker(category)}
        </>
      )}
    </div>
  );
}
