import { auth, onAuthStateChanged } from "@/firebaseConfig";
import { toast } from "react-toastify";

const getUserInfo = async () => {
  try {
    const userCredential = await onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = user.getIdToken();
        return { uid: user.uid, token };
      } else {
        throw new Error("User isn't logined");
      }
    });

    console.log("Пользователь залогинен");

    return userCredential;
  } catch (error) {
    toast.error("Login or password incorrect");
    console.log("Ошибка логина", error.message, error.code);
  }
};

export default getUserInfo;
