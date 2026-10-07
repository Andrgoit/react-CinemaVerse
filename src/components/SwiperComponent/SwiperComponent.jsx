/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./swiperNavigation.css";

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
      navigation={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      spaceBetween={10}
      breakpoints={swiperSettings.breakpoints}
      modules={[Navigation]}
      className={styles.swiper}
    >
      {elements}
    </Swiper>
  );
}
