import { useTranslation } from "react-i18next";

import { FaRegHeart, FaPlus } from "react-icons/fa";
import styles from "./ButtonBlock.module.css";

export default function ButtonBlock() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <button className={styles.addButton}>
        <FaPlus /> {t("movieDetails.buttonBlock.addMovie")}
      </button>
      <button className={styles.favoriteButton}>
        <FaRegHeart />
      </button>
    </div>
  );
}
