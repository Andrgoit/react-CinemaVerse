import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./swiperNavigation.css";

import noPoster from "@/assets/img/noPhoto.svg";
import star from "@/assets/icons/star.png";
import imgSizes from "@/data/imgSizes";
import contentBaseURL from "@/data/baseURLs";
import { swiperSettings } from "@/data/swiperSettings";

import styles from "./TopRateSwipeComponent.module.css";

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
