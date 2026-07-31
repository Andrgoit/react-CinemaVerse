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

// {
//   "id": 550,
//   "cast": [
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 819,
//       "known_for_department": "Acting",
//       "name": "Edward Norton",
//       "original_name": "Edward Norton",
//       "popularity": 26.99,
//       "profile_path": "/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
//       "cast_id": 4,
//       "character": "The Narrator",
//       "credit_id": "52fe4250c3a36847f80149f3",
//       "order": 0
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 287,
//       "known_for_department": "Acting",
//       "name": "Brad Pitt",
//       "original_name": "Brad Pitt",
//       "popularity": 45.202,
//       "profile_path": "/huV2cdcolEUwJy37QvH914vup7d.jpg",
//       "cast_id": 5,
//       "character": "Tyler Durden",
//       "credit_id": "52fe4250c3a36847f80149f7",
//       "order": 1
//     },
//     {
//       "adult": false,
//       "gender": 1,
//       "id": 1283,
//       "known_for_department": "Acting",
//       "name": "Helena Bonham Carter",
//       "original_name": "Helena Bonham Carter",
//       "popularity": 22.112,
//       "profile_path": "/DDeITcCpnBd0CkAIRPhggy9bt5.jpg",
//       "cast_id": 285,
//       "character": "Marla Singer",
//       "credit_id": "631f0de8bd32090082733691",
//       "order": 2
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 7470,
//       "known_for_department": "Acting",
//       "name": "Meat Loaf",
//       "original_name": "Meat Loaf",
//       "popularity": 7.738,
//       "profile_path": "/7gKLR1u46OB8WJ6m06LemNBCMx6.jpg",
//       "cast_id": 7,
//       "character": "Robert \"Bob\" Paulson",
//       "credit_id": "52fe4250c3a36847f80149ff",
//       "order": 3
//     },
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 7499,
//       "known_for_department": "Acting",
//       "name": "Jared Leto",
//       "original_name": "Jared Leto",
//       "popularity": 18.969,
//       "profile_path": "/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg",
//       "cast_id": 286,
//       "character": "Angel Face",
//       "credit_id": "631f0e29ce9e91007f757d86",
//       "order": 4
//     },
//
//   ]
// }
