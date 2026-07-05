import github from "@/assets/icons/github.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.link}
        to={"https://github.com/Andrgoit"}
        target="_blank"
      >
        <img src={github} alt="github icon" width={24} height={24} />
      </Link>
    </footer>
  );
}
