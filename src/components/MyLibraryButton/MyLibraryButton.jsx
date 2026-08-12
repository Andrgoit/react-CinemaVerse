import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchlistIcon from "@/assets/icons/watchlist.svg?react";

import styles from "./MyLibraryButton.module.css";

export default function MyLibraryButton() {
  const displayName = useSelector((state) => state.user.user.displayName);

  return (
    displayName && (
      <Link to={"/library"} className={styles.link} title="My Library">
        <WatchlistIcon className={styles.img} />
      </Link>
    )
  );
}
