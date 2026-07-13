/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import noPoster from "@/assets/img/noPhoto.svg";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import { swiperSettings } from "@/data/swiperSettings";

import styles from "./SwiperComponent.module.css";

export default function SwiperComponent({ movies = [], genres = [] }) {
  const imageBaseURL = contentBaseURL.posterImg;
  const posterSize = imgSizes.posterSizes.w342;

  const elements = movies.map((movie) => {
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
      <SwiperSlide key={id}>
        <Link to={`/movie/${id}`} className={styles.link}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardImageWrapper}>
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
            <div className={styles.cardFooter}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className={styles.genresWrapper}>{genreElement}</div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      breakpoints={swiperSettings.breakpoints}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {elements}
    </Swiper>
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
