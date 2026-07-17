import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Section.module.css";

export default function Section({ title, link, children }) {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          {link ? (
            <Link to={link} className={styles.link}>
              {t("section.linkViewAll")}
            </Link>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
