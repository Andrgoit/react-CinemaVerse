import { useTranslation } from "react-i18next";

import styles from "./MovieRuntime.module.css";

export default function MovieRuntime({ runtime }) {
  const { t } = useTranslation();

  if (!runtime) return null;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;

  return (
    <div className={styles.wrapper}>
      <span>
        {hours}
        {t("movieDetails.movieRuntime.hours")}
      </span>
      <span>
        {minutes}
        {t("movieDetails.movieRuntime.minutes")}
      </span>
    </div>
  );
}
