import { Link } from "react-router-dom";

import noPoster from "@/assets/img/noPhoto.svg";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import styles from "./LibraryMoviesList.module.css";

export default function LibraryMoviesList({ movies = [] }) {
  console.log("movies", movies);

  if (!movies) return null;

  const imageBaseURL = contentBaseURL.posterImg;
  const posterSize = imgSizes.posterSizes.w342;

  const elements = movies.map((movie) => {
    const { id, poster_path, title, genres } = movie;

    const genreElement = genres.map(({ name }) => (
      <span key={name} className={styles.genres}>
        {name}
      </span>
    ));

    return (
      <Link to={`/movie/${id}`} className={styles.link} key={id}>
        <li className={styles.cardWrapper}>
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
        </li>
      </Link>
    );
  });

  return <ul className={styles.cardList}>{elements}</ul>;
}
