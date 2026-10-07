import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import noPhotoUser from "@/assets/img/noPhotoUser.png";
import imageBaseUrl from "@/data/baseURLs";
import imgSizes from "@/data/imgSizes";
import { swiperSettings } from "@/data/swiperSettings";

import styles from "./CaseSwiperComponent.module.css";

export default function CaseSwiperComponent({ movieCast = [] }) {
  const { t } = useTranslation();

  const imgUrl = imageBaseUrl.posterImg;
  const imgSize = imgSizes.profile_size.w45;

  const elements = movieCast.map((cast) => {
    const { id, profile_path, name, character } = cast;

    return (
      <SwiperSlide key={id}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardImageWrapper}>
            <img
              src={
                profile_path
                  ? `${imgUrl}${imgSize}${profile_path}`
                  : noPhotoUser
              }
              alt={`${name} poster image`}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{name}</h3>
            <span className={styles.cardText}>{t("cast.as")}</span>
            <p className={styles.cardText}>{character}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={10}
      breakpoints={swiperSettings.breakpoints_cast}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {elements}
    </Swiper>
  );
}
