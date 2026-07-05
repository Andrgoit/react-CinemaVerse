import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@/components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import noPoster from "@/assets/img/noPhoto.svg";
import posterSizes from "@/data/imgSizes";

import styles from "./SwiperComponent.module.css";

export default function OverviewsSwiperComponent({ overviews = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenOverview, setChosenOverview] = useState(null);
  const imageBaseURL = "https://image.tmdb.org/t/p/";
  const posterSize = posterSizes.w92;

  const closeModal = () => setIsModalOpen(false);
  const openModal = (overview) => {
    setIsModalOpen(true);
    setChosenOverview(overview);
  };

  const elements = overviews.map((overview) => {
    const { id, poster_path, title } = overview;

    return (
      <SwiperSlide key={id}>
        <div className={styles.cardWrapper} onClick={() => openModal(overview)}>
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
          </div>
        </div>
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
      {isModalOpen && (
        <Modal close={closeModal}>
          {/* <MovieDetails movieDitails={chosenMovie} genres={genres} /> */}
        </Modal>
      )}
    </Swiper>
  );
}

// {
//   "id": 550,
//   "page": 1,
//   "results": [
//     {
//       "author": "Goddard",
//       "author_details": {
//         "name": "",
//         "username": "Goddard",
//         "avatar_path": "/https://secure.gravatar.com/avatar/f248ec34f953bc62cafcbdd81fddd6b6.jpg",
//         "rating": null
//       },
//       "content": "Pretty awesome movie.  It shows what one crazy person can convince other crazy people to do.  Everyone needs something to believe in.  I recommend Jesus Christ, but they want Tyler Durden.",
//       "created_at": "2018-06-09T17:51:53.359Z",
//       "id": "5b1c13b9c3a36848f2026384",
//       "updated_at": "2021-06-23T15:58:09.421Z",
//       "url": "https://www.themoviedb.org/review/5b1c13b9c3a36848f2026384"
//     },
//     {
//       "author": "Brett Pascoe",
//       "author_details": {
//         "name": "Brett Pascoe",
//         "username": "SneekyNuts",
//         "avatar_path": "/https://secure.gravatar.com/avatar/04d45e186650672a416315dac947b3d6.jpg",
//         "rating": 9
//       },
//       "content": "In my top 5 of all time favourite movies. Great story line and a movie you can watch over and over again.",
//       "created_at": "2018-07-05T13:22:41.754Z",
//       "id": "5b3e1ba1925141144c007f17",
//       "updated_at": "2021-06-23T15:58:10.199Z",
//       "url": "https://www.themoviedb.org/review/5b3e1ba1925141144c007f17"
//     },
//     {
//       "author": "MSB",
//       "author_details": {
//         "name": "MSB",
//         "username": "msbreviews",
//         "avatar_path": "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
//         "rating": 8
//       },
//       "content": "If you enjoy reading my Spoiler-Free reviews, please follow my blog @\r\nhttps://www.msbreviews.com\r\n\r\nDavid Fincher’s new film, Mank, is ",
//       "created_at": "2020-11-22T17:13:46.301Z",
//       "id": "5fba9c4a0792e1003f3a1294",
//       "updated_at": "2021-06-23T15:58:47.886Z",
//       "url": "https://www.themoviedb.org/review/5fba9c4a0792e1003f3a1294"
//     },

//   ],
//   "total_pages": 1,
//   "total_results": 8
// }
