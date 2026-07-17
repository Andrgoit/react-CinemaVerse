import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./BreadcrumbNavigation.module.css";

export default function BreadcrumbNavigation() {
  const { t } = useTranslation();
  const { category } = useParams();

  const titleMaker = (category) => {
    switch (category) {
      case "trending-movies":
        return t("breadcrumbNavigation.trendingMovies");

      case "top-rated-movies":
        return t("breadcrumbNavigation.topRatedMovies");

      case "upcoming-movies":
        return t("breadcrumbNavigation.upcomingMovies");

      case "now-playing-movies":
        return t("breadcrumbNavigation.nowPlayingMovies");

      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.link}>
        {t("breadcrumbNavigation.home")}
      </Link>
      {category && (
        <div className={styles.wrapper}>
          <span> &gt; </span>
          <span>{titleMaker(category)}</span>
        </div>
      )}
    </div>
  );
}
