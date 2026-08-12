import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth, onAuthStateChanged } from "@/firebaseConfig";
import { logIn, logOut } from "@/redux/userSlice";
import { clearWatchList, loadWatchList } from "@/redux/watchlistSlice";
import { clearFavoriteList, loadFavoriteList } from "@/redux/favoriteSlice";
import { Modal, LoginForm, RegisterForm } from "@/components";

import {
  userSignUp,
  userLogIn,
  userLogOut,
  creatUser,
  updateUserInfo,
  getFavoriteListFromDB,
  getWatchListFromDB,
} from "@/api";

import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";

import styles from "./LoginButton.module.css";

export default function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const userName = useSelector((state) => state.user.user.displayName);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, accessToken, uid, displayName } = user;
        getMoviesFromDB(uid);
        dispatch(logIn({ email, accessToken, uid, displayName }));
      } else {
        dispatch(logOut());
      }
    });
  }, [dispatch]);

  const userLogout = async () => {
    const res = await userLogOut();
    if (res.status === "OK") {
      dispatch(logOut());
      dispatch(clearWatchList());
      dispatch(clearFavoriteList());
    }
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

  return (
    <>
      <button type="button" className={styles.loginButton}>
        {!userName ? (
          <IoPersonOutline size={22} onClick={openModal} title="Log In" />
        ) : (
          <IoLogOutOutline size={22} onClick={userLogout} title="Log Out" />
        )}
      </button>
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
    </>
  );
}
