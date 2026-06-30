import LogoIcon from "@/assets/icons/logo.svg?react";
import styles from "@/components/Logo/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.iconWrapper}>
        <LogoIcon className={styles.icon} />
      </div>
      <span className={styles.logoText}>CinemaVerse</span>
    </div>
  );
}
