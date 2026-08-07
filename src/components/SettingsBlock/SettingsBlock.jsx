import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "@/redux/userSlice";
import { clearWatchList, loadWatchList } from "@/redux/watchlistSlice";
import { clearFavoriteList, loadFavoriteList } from "@/redux/favoriteSlice";
import { Modal, LoginForm, RegisterForm } from "@/components";
import {
  IoLanguage,
  IoSunny,
  IoMoon,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import langIcons from "@/data/langIcons";
import styles from "./SettingsBlock.module.css";

import {
  userSignUp,
  userLogIn,
  userLogOut,
  creatUser,
  updateUserInfo,
  getFavoriteListFromDB,
  getWatchListFromDB,
} from "@/api";

export default function SettingsBlock() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.displayName);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (theme === "light") document.body.classList.add("light");
    else document.body.classList.remove("light");
  }, [theme]);

  const themeChanger = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const languageChanger = (lang) => {
    setIsMenuOpen(false);
    i18n.changeLanguage(lang);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLogin(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const formChanger = () => {
    setIsLogin(!isLogin);
  };

  const getMoviesFromDB = async (uid) => {
    const getFavoritListResult = await getFavoriteListFromDB(uid);
    if (getFavoritListResult) {
      dispatch(loadFavoriteList(getFavoritListResult));
    }

    const getWatchListResult = await getWatchListFromDB(uid);
    if (getWatchListResult) {
      dispatch(loadWatchList(getWatchListResult));
    }
  };

  const userLogination = async (user) => {
    const { login, password } = user;
    closeModal();
    try {
      const userLoginresult = await userLogIn(login, password);
      const { email, accessToken, uid, displayName } = userLoginresult;
      dispatch(logIn({ email, accessToken, uid, displayName }));

      getMoviesFromDB(uid);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const userSignUping = async (user) => {
    const { email: userEmail, password, displayName } = user;
    closeModal();
    try {
      const signUpresult = await userSignUp(userEmail, password);
      if (!signUpresult) return;

      const { email, uid, accessToken } = signUpresult;

      const updateUserResult = await updateUserInfo(displayName);
      if (updateUserResult.status !== "OK") return;

      const profile = { email, displayName };

      const createResponse = await creatUser(uid, profile, accessToken);
      if (createResponse.status === "OK") {
        const { uid, email, displayName } = createResponse;
        dispatch(logIn({ email, accessToken, uid, displayName }));
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const userLogout = async () => {
    const res = await userLogOut();
    if (res.status === "OK") {
      dispatch(logOut());
      dispatch(clearWatchList());
      dispatch(clearFavoriteList());
    }
  };

  const elements = langIcons.map(({ lang, icon }) => (
    <li
      key={lang}
      className={styles.languageIconsItem}
      onClick={() => languageChanger(lang)}
    >
      <img src={icon} alt={`${lang} language icon`} />
    </li>
  ));

  return (
    <div className="relative flex items-center gap-3">
      {userName && <span>{userName}</span>}
      <button type="button" className={styles.loginButton}>
        {!userName ? (
          <IoPersonOutline size={22} onClick={openModal} />
        ) : (
          <IoLogOutOutline size={22} onClick={userLogout} />
        )}
      </button>
      <button
        type="button"
        onClick={themeChanger}
        className={styles.themeButton}
      >
        {theme === "dark" ? (
          <IoMoon size={22} />
        ) : (
          <IoSunny size={22} color={`var(--color-accent)`} />
        )}
      </button>

      <button
        type="button"
        className={styles.languageButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoLanguage size={22} />
      </button>
      {isMenuOpen && <ul className={styles.languageIconsList}>{elements}</ul>}
      {isModalOpen && (
        <Modal close={closeModal}>
          {isLogin ? (
            <LoginForm
              formChanger={formChanger}
              userLogination={userLogination}
            />
          ) : (
            <RegisterForm
              formChanger={formChanger}
              userSignUping={userSignUping}
            />
          )}
        </Modal>
      )}
    </div>
  );
}
