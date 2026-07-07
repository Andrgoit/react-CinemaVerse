import { useMediaQuery } from "react-responsive";
import { Logo, Nav, SearchIcon, SearchInput } from "@/components";
import styles from "@/components/Header/Header.module.css";

export default function Header() {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <Logo />
          <Nav />
          {/* {isDesktop ? <SearchInput /> : <SearchIcon />} */}
        </div>
      </div>
    </header>
  );
}
