import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  addMovieToWatchList,
  removeMovieFromWatchList,
} from "@/redux/watchlistSlice";
import {
  addMovieToFavoriteList,
  removeMovieFromFavoriteList,
} from "@/redux/favoriteSlice";
import {
  addToWatchlist,
  removeFromWatchlist,
  addToFavoriteList,
  removeFromFavoriteList,
} from "@/api";

import { FaRegHeart, FaPlus, FaMinus } from "react-icons/fa";
import styles from "./ButtonBlock.module.css";

export default function ButtonBlock({ movieDitails }) {
  const { id, poster_path, title, release_date, genres } = movieDitails;

  const uid = useSelector((state) => state.user.user.uid);
  const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
  const watchList = useSelector((state) => state.watchList.watchList);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isMovieToFavoriteListAdded = favoriteList[id];
  const isMovieToWatchListAdded = watchList[id];

  const addWatchMovie = async () => {
    const movie = { id, poster_path, title, release_date, genres };
    const result = await addToWatchlist(uid, movie);
    if (result.status === "OK") {
      dispatch(addMovieToWatchList(movie));
    }
  };

  const removeWatchMovie = async () => {
    const result = await removeFromWatchlist(uid, id);
    if (result.status === "OK") {
      dispatch(removeMovieFromWatchList(id.toString()));
    }
  };

  const addFavoriteMovie = async () => {
    const movie = { id, poster_path, title, release_date, genres };
    const result = await addToFavoriteList(uid, movie);
    if (result.status === "OK") {
      dispatch(addMovieToFavoriteList(movie));
    }
  };
  const removeFavoriteMovie = async () => {
    const result = await removeFromFavoriteList(uid, id);
    if (result.status === "OK") {
      dispatch(removeMovieFromFavoriteList(id.toString()));
    }
  };

  return (
    <div className="flex items-center gap-3">
      {!isMovieToWatchListAdded ? (
        <button
          className={styles.addButton}
          disabled={!uid}
          onClick={addWatchMovie}
        >
          <FaPlus /> {t("movieDetails.buttonBlock.addMovie")}
        </button>
      ) : (
        <button
          className={styles.addButton}
          disabled={!uid}
          onClick={removeWatchMovie}
        >
          <FaMinus /> {t("movieDetails.buttonBlock.removeMovie")}
        </button>
      )}
      {!isMovieToFavoriteListAdded ? (
        <button
          className={styles.favoriteButton}
          disabled={!uid}
          onClick={addFavoriteMovie}
        >
          <FaRegHeart />
        </button>
      ) : (
        <button
          className={styles.favoriteButton}
          disabled={!uid}
          onClick={removeFavoriteMovie}
        >
          <FaRegHeart className={styles.favoriteButtonFull} />
        </button>
      )}
    </div>
  );
}
