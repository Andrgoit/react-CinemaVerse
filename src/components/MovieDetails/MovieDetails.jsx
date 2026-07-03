import noPoster from "@/assets/img/noPhoto.svg";
import posterSizes from "@/data/posterSizes";
const imageBaseURL = "https://image.tmdb.org/t/p/";
import star from "@/assets/icons/star.png";

import styles from "./MovieDetails.module.css";

export default function MovieDetails({ movieDitails, genres }) {
  const {
    poster_path,
    title,
    release_date,
    genre_ids,
    vote_count,
    vote_average,
  } = movieDitails;

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
    <div>
      <div>
        <img
          src={
            poster_path
              ? `${imageBaseURL}${posterSize}${poster_path}`
              : noPoster
          }
          alt={`${title} poster image`}
          className={styles.cardImage}
        />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <p>Release: {release_date}</p>
          <div>{genreElement}</div>
        </div>
        <div>
          <div>
            <div>
              <img src={star} alt="star icon" />
            </div>
            <div>
              <span>{vote_average.toFixed(1)}</span> <span>/10</span>
            </div>
          </div>
          <span>{vote_count} votes</span>
        </div>
      </div>
    </div>
  );
}

// {
//       "adult": false,
//       "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
//       "genre_ids": [
//         18,
//         80
//       ],
//       "id": 238,
//       "original_language": "en",
//       "original_title": "The Godfather",
//       "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
//       "popularity": 100.932,
//       "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
//       "release_date": "1972-03-14",
//       "title": "The Godfather",
//       "video": false,
//       "vote_average": 8.7,
//       "vote_count": 17806
//     }
