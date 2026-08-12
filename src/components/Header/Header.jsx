import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Logo,
  BurgerButton,
  BurgerMenu,
  UserName,
  ThemeButton,
  LanguageButton,
  LoginButton,
  MyLibraryButton,
} from "@/components";

import styles from "@/components/Header/Header.module.css";

export default function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 640 });

  const openMenu = () => setisMenuOpen(true);
  const closeMenu = () => setisMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <Logo />
          <div className="flex items-center gap-3">
            {isMobile && (
              <>
                <UserName />
                <MyLibraryButton />
              </>
            )}
            {isTablet ? (
              <div className="flex items-center gap-3">
                <LoginButton />
                <ThemeButton />
                <LanguageButton />
              </div>
            ) : (
              <BurgerButton openMenu={openMenu} />
            )}
          </div>
        </div>
        {isMenuOpen && <BurgerMenu closeMenu={closeMenu} />}
      </div>
    </header>
  );
}
