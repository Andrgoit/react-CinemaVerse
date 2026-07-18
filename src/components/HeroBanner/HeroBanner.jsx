import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "./swiperNavigation.css";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        lazy={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
      >
        <SwiperSlide>
          <div className={styles.card1}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card2}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card3}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
