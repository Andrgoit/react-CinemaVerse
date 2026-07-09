import ReactPlayer from "react-player";
import playIcon from "@/assets/icons/playButton.png";

import styles from "./VideoPlayer.module.css";

export default function VideoPlayer({ video }) {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        light
        src={video}
        width="100%"
        height="100%"
        playIcon={
          <img src={playIcon} alt="play icon" className={styles.icon} />
        }
        playing
        controls
      />
    </div>
  );
}
