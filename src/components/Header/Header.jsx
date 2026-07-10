import { useMediaQuery } from "react-responsive";
import { Logo, Nav, SettingsBlock, BurgerButton } from "@/components";
import styles from "@/components/Header/Header.module.css";

export default function Header() {
  const isMobile = useMediaQuery({ minWidth: 480 });
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <Logo />
          {!isMobile ? (
            <BurgerButton />
          ) : (
            <div className="flex items-center gap-3">
              <Nav />
              <SettingsBlock />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
