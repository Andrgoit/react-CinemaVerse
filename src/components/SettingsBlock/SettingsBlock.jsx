import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "@/redux/userSlice";
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

import { userSignUp, userLogIn, userLogOut, creatUser } from "@/api";

export default function SettingsBlock() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.uid);
  console.log("user", user);

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

  const userLogination = async (user) => {
    const { login, password } = user;
    closeModal();
    try {
      const result = await userLogIn(login, password);
      console.log("result", result);
      const { email, accessToken, uid } = result;
      dispatch(logIn({ email: email, token: accessToken, uid: uid }));
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const userSignUping = async (user) => {
    const { email: userEmail, password, displayName } = user;
    console.log("user", user);
    closeModal();

    try {
      const result = await userSignUp(userEmail, password);
      console.log("result", result);
      const { email, accessToken, uid } = result;

      const profile = { email, displayName };
      const response = await creatUser(uid, profile, accessToken);
      console.log("response", response);
      if (response.status === "OK") {
        const { uid, email, displayName } = response;
        dispatch(logIn({ email, accessToken, uid, displayName }));
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const userLogout = async () => {
    await userLogOut();
    dispatch(logOut());
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
      <button type="button" className={styles.loginButton}>
        {!user ? (
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
