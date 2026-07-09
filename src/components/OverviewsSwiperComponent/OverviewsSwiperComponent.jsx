import { useState } from "react";
import { Modal } from "@/components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import noPhotoUser from "@/assets/img/noPhotoUser.png";
import { swiperSettings } from "@/data/swiperSettings";
import imageBaseUrl from "@/data/baseURLs";
import imgSizes from "@/data/imgSizes";

import styles from "./OverviewsSwiperComponent.module.css";

export default function OverviewsSwiperComponent({ movieReviews = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenOverview, setChosenOverview] = useState(null);

  const imgUrl = imageBaseUrl.posterImg;
  const imgSize = imgSizes.profile_size.w45;

  const closeModal = () => setIsModalOpen(false);
  const openModal = (overview) => {
    setIsModalOpen(true);
    setChosenOverview(overview);
  };

  const elements = movieReviews.map((overview) => {
    const {
      id,
      author_details: { avatar_path },
      content,
      author,
    } = overview;

    return (
      <SwiperSlide key={id}>
        <div className={styles.cardWrapper} onClick={() => openModal(overview)}>
          <div className="flex items-center gap-2">
            <div className={styles.cardImageWrapper}>
              <img
                src={
                  avatar_path
                    ? `${imgUrl}${imgSize}${avatar_path}`
                    : noPhotoUser
                }
                alt={`${author} avatar`}
                className={styles.cardImage}
              />
            </div>
            <span>{author}</span>
          </div>
          <div className={styles.cardContentWrapper}>
            <p className={styles.cardContentText}>{content}</p>
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
      breakpoints={swiperSettings.reviewsBreakpoints}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {elements}
      {isModalOpen && (
        <Modal close={closeModal}>
          <div className={styles.cardWrapperModal}>
            <div className="flex items-center gap-2">
              <div className={styles.cardImageWrapper}>
                <img
                  src={
                    chosenOverview.author_details.avatar_path
                      ? `${imgUrl}${imgSize}${chosenOverview.author_details.avatar_path}`
                      : noPhotoUser
                  }
                  alt={`${chosenOverview.author} avatar`}
                  className={styles.cardImage}
                />
              </div>
              <span>{chosenOverview.author}</span>
            </div>
            <div className={styles.cardContentWrapperModal}>
              <p className={styles.cardContentTextModal}>
                {chosenOverview.content}
              </p>
            </div>
          </div>
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
