import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, MovieDetails, VideoPlayer } from "@/components";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import baseURL from "@/data/baseURLs";

import styles from "./SwiperComponent.module.css";

export default function TrailersSwiperComponent({ movieTrailers = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenTrailer, setChosenTrailer] = useState(null);

  const videoBaseURL = baseURL.youtubeVideo;

  const closeModal = () => setIsModalOpen(false);
  const openModal = (src) => {
    setIsModalOpen(true);
    setChosenTrailer(src);
  };

  const elements = movieTrailers.map((trailer) => {
    const { id, key } = trailer;
    const src = `${videoBaseURL}${key}`;
    return (
      <SwiperSlide key={id}>
        <div className={styles.cardWrapper} onClick={() => openModal(src)}>
          <ReactPlayer light src={src} width="100%" height="100%" />
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
          <VideoPlayer video={chosenTrailer} />
        </Modal>
      )}
    </Swiper>
  );
}

// {
//   "id": 550,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Fight Club (1999) Trailer - Starring Brad Pitt, Edward Norton, Helena Bonham Carter",
//       "key": "O-b2VfmmbyA",
//       "site": "YouTube",
//       "size": 720,
//       "type": "Trailer",
//       "official": false,
//       "published_at": "2016-03-05T02:03:14.000Z",
//       "id": "639d5326be6d88007f170f44"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "#TBT Trailer",
//       "key": "BdJKm16Co6M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2014-10-02T19:20:22.000Z",
//       "id": "5c9294240e0a267cd516835f"
//     }
//   ]
// }
