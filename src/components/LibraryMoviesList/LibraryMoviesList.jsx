import { useState } from "react";
import { Link } from "react-router-dom";

import { EmptyList, ButtonBlock } from "@/components";

import { BsThreeDotsVertical } from "react-icons/bs";
import noPoster from "@/assets/img/noPhoto.svg";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import styles from "./LibraryMoviesList.module.css";

export default function LibraryMoviesList({ movies = [] }) {
  const [openMenuId, setOpenMenuId] = useState(null);

  if (!movies) return null;

  const imageBaseURL = contentBaseURL.posterImg;
  const posterSize = imgSizes.posterSizes.w342;

  const openMenu = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenMenuId((currentId) => (currentId === id ? null : id));
  };

  const elements = movies.map((movie) => {
    const { id, poster_path, title, genres } = movie;

    const genreElement = genres.map(({ name }) => (
      <span key={name} className={styles.genres}>
        {name}
      </span>
    ));

    return (
      <li className={styles.cardWrapper} key={id}>
        <Link to={`/movie/${id}`} className={styles.link}>
          <div className={styles.cardImageWrapper}>
            <img
              src={
                poster_path
                  ? `${imageBaseURL}${posterSize}${poster_path}`
                  : noPoster
              }
              alt={`${title} poster image`}
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.cardFooter}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.genresWrapper}>{genreElement}</div>
          </div>
        </Link>
        <button
          type="button"
          className={styles.threeDotsWrapper}
          onClick={(e) => openMenu(e, id)}
        >
          <BsThreeDotsVertical size={26} className={styles.threeDotsIcon} />
        </button>
        {openMenuId === id && (
          <div className={styles.menuWrapper}>
            <ButtonBlock movieDitails={{ id, poster_path, title, genres }} />
          </div>
        )}
      </li>
    );
  });

  return !movies.length > 0 ? (
    <EmptyList />
  ) : (
    <ul className={styles.cardList}>{elements}</ul>
  );
}
