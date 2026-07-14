import { Link } from "react-router-dom";
import { PaginationComponent } from "@/components";

import noPoster from "@/assets/img/noPhoto.svg";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import styles from "./MoviesList.module.css";

export default function MoviesList({ movies, genres }) {
  if (!movies) return null;

  const { results = [] } = movies;

  const imageBaseURL = contentBaseURL.posterImg;
  const posterSize = imgSizes.posterSizes.w342;

  const elements = results.map((movie) => {
    // eslint-disable-next-line no-unused-vars
    const { id, poster_path, title, release_date, genre_ids } = movie;

    // ------------------------------------
    const normalizedGenres = genres
      .map((genre) => (genre_ids.includes(genre.id) ? genre.name : null))
      .filter(Boolean);

    const genreElement = normalizedGenres.map((name) => (
      <span key={name} className={styles.genres}>
        {name}
      </span>
    ));
    // ------------------------------------

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

// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//       "genre_ids": [
//         18,
//         53,
//         35
//       ],
//       "id": 550,
//       "original_language": "en",
//       "original_title": "Fight Club",
//       "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//       "popularity": 73.433,
//       "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//       "release_date": "1999-10-15",
//       "title": "Fight Club",
//       "video": false,
//       "vote_average": 8.433,
//       "vote_count": 26279
//     },
//   ],
//   "total_pages": 2,
//   "total_results": 39
// }
