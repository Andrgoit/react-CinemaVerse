import { MovieRuntime, ButtonBlock } from "@/components";
import noPoster from "@/assets/img/noPhoto.svg";
import imgSizes from "@/data/imgSizes";
const imageBaseURL = "https://image.tmdb.org/t/p/";
import star from "@/assets/icons/star.png";

import styles from "./MovieDetails.module.css";

const posterSize = imgSizes.posterSizes.w342;

export default function MovieDetails({ movieDitails }) {
  const {
    poster_path,
    title,
    release_date,
    genres,
    vote_count,
    vote_average,
    runtime,
    overview,
  } = movieDitails;

  const normalizedDate = new Date(release_date).getFullYear();

  const genreElement = genres.map(({ name }) => (
    <span key={name} className={styles.genres}>
      {name}
    </span>
  ));

  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <div className={styles.detailsWrapper}>
          <div className={styles.posterWrapper}>
            <img
              src={
                poster_path
                  ? `${imageBaseURL}${posterSize}${poster_path}`
                  : noPoster
              }
              alt={`${title} poster image`}
              className={styles.posterImage}
            />
          </div>
          <div className={styles.infoWrapper}>
            <div className="flex flex-col gap-1">
              <h2 className={styles.title}>{title}</h2>
              <div className="flex items-center gap-1">
                <p className={styles.date}>{normalizedDate}</p>
                <span className={styles.separator}></span>
                <MovieRuntime runtime={runtime} />
              </div>

              <div className={styles.genresList}>{genreElement}</div>
            </div>

            <div className={styles.voteWrapper}>
              <div className={styles.voteSection}>
                <div className={styles.starIconWrapper}>
                  <img
                    src={star}
                    alt="star icon"
                    className={styles.starIconImage}
                  />
                </div>
                <div className={styles.voteAverageSection}>
                  <span className={styles.voteAverageCount}>
                    {vote_average.toFixed(1)}
                  </span>
                  <span className={styles.voteAverageTotal}>/10</span>
                </div>
              </div>
              <span className={styles.voteCount}>{vote_count} votes</span>
            </div>
          </div>
        </div>
        <ButtonBlock />
        <div className="w-full">
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
}

// adult: false
// backdrop_path: "/2eW8VlLXjUq4OKk8SYf5KTr91Kv.jpg"
// belongs_to_collection: {id: 4246, name: 'Scary Movie Collection', poster_path: '/8ds74cRhyAza3WcDVT8rZycwSC9.jpg', backdrop_path: '/4YFCPV5KXWgIfQ8oTEeIJvtuxVj.jpg'}
// budget: 20000000
// genres: Array(1)
// 0: {id: 35, name: 'Comedy'}
// length: 1
// [[Prototype]]
// : Array(0)
// homepage: ""
// id: 4258
// imdb_id: "tt0795461"
// origin_country: ['US']
// original_language: "en"
// original_title: "Scary Movie 5"
// overview:
// "Home with their newly-formed family, happy parents Dan and Jody are haunted by sinister, paranormal activities. Determined to expel the insidious force, they install security cameras and discover their family is being stalked by an evil dead demon."
// popularity: 10.5608
// poster_path: "/vBqLLxE6GaAPhO6v9EFvFbLZ7Ap.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: [{…}]
// release_date: "2013-04-11"
// revenue: 78613981
// runtime: 86
// softcore: false
// spoken_languages: [{…}]
// status: "Released"
// tagline: "Evil is coming. Bring protection."
// title: "Scary Movie 5"
// video: false
// vote_average: 4.796
// vote_count: 3082
