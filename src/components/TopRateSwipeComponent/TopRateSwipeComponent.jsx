import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./swiperNavigation.css";

import styles from "./TopRateSwipeComponent.module.css";

import noPoster from "@/assets/img/noPhoto.svg";
import star from "@/assets/icons/star.png";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import { swiperSettings } from "@/data/swiperSettings";

export default function TopRateSwipeComponent({ movies = [] }) {
  const imageBaseURL = contentBaseURL.posterImg;
  const posterSize = imgSizes.posterSizes.w185;

  const elements = movies.map((movie) => {
    const { id, poster_path, title, vote_average } = movie;
    return (
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
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className="flex items-center justify-center gap-1">
                <div className={styles.iconWrapper}>
                  <img src={star} alt="star icon" className={styles.icon} />
                </div>
                <span className={styles.vote}>{vote_average.toFixed(1)}</span>
              </div>
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
      navigation={true}
      breakpoints={swiperSettings.breakpoints_topRateMovies}
      modules={[Autoplay, Navigation]}
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
