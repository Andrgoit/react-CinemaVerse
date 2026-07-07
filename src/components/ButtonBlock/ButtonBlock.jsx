import { FaRegHeart,FaPlus } from "react-icons/fa";
import styles from "./ButtonBlock.module.css"

export default function ButtonBlock() {
    return <div className=" flex gap-3 items-center">
        <button className={styles.addButton}><FaPlus/> Add to Watchlist</button>
        <button className={styles.favoriteButton}><FaRegHeart /></button>
        
  </div>;
}