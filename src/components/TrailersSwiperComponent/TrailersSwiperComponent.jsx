import { useState } from "react";
import { Modal, VideoPlayer } from "@/components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import baseURL from "@/data/baseURLs";
import { swiperSettings } from "@/data/swiperSettings";
import styles from "./TrailersSwiperComponent.module.css";
import playIcon from "@/assets/icons/playButton.png";
import ytPreviewImageQuality from "@/data/ytPreviewImageQuality";

export default function TrailersSwiperComponent({ movieTrailers = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenTrailer, setChosenTrailer] = useState(null);

  const videoBaseURL = baseURL.youtubeVideo;
  const previewImageBaseURL = baseURL.youtubePreviewImage;
  const imageQuality = ytPreviewImageQuality.hd;

  const closeModal = () => setIsModalOpen(false);
  const openModal = (src) => {
    setIsModalOpen(true);
    setChosenTrailer(src);
  };

  const elements = movieTrailers.map((trailer) => {
    const { id, key } = trailer;
    const src = `${videoBaseURL}${key}`;
    const previewImage = `${previewImageBaseURL}${key}/${imageQuality}`;

    return (
      <SwiperSlide key={id}>
        <div className={styles.cardWrapper} onClick={() => openModal(src)}>
          <img src={previewImage} alt="preview image" />
          <div className={styles.iconWrapper}>
            <img src={playIcon} alt="play button" />
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
      breakpoints={swiperSettings.breakpoints_trailers}
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
