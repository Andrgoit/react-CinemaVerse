import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./TopRateSwipeComponent.module.css";

import noPoster from "@/assets/img/noPhoto.svg";
import star from "@/assets/icons/star.png";
import posterSizes from "@/data/posterSizes";

export default function TopRateSwipeComponent({ movies = [] }) {
  const imageBaseURL = "https://image.tmdb.org/t/p/";
  const posterSize = posterSizes.w92;

  const elements = movies.map(({ id, vote_average, poster_path, title }) => (
    <SwiperSlide key={id}>
      <Link to={`/movie/${id}`} className={styles.link}>
        <div className={styles.cardWrapper}>
          <div className={styles.imageWrapper}>
            <img
              src={
                poster_path
                  ? `${imageBaseURL}${posterSize}${poster_path}`
                  : noPoster
              }
              alt={`${title} poster image`}
              className={styles.image}
            />
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.iconWrapper}>
              <img src={star} alt="star icon" className={styles.icon} />
            </div>
            <span className={styles.vote}>{vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      spaceBetween={10}
      breakpoints={{
        320: { slidesPerView: 4, spaceBetween: 10 },
        768: { slidesPerView: 8, spaceBetween: 20 },
        1024: { slidesPerView: 9, spaceBetween: 10 },
        1280: { slidesPerView: 16, spaceBetween: 10 },
      }}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {elements}
    </Swiper>
  );
}

// const imageRes = {
//   images: {
//     base_url: "http://image.tmdb.org/t/p/",
//     secure_base_url: "https://image.tmdb.org/t/p/",
//     backdrop_sizes: ["w300", "w780", "w1280", "original"],
//     logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//     poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//     profile_sizes: ["w45", "w185", "h632", "original"],
//     still_sizes: ["w92", "w185", "w300", "original"],
//   },
// };

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
