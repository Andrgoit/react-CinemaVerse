import { auth, signInWithEmailAndPassword } from "@/firebaseConfig";
import { toast } from "react-toastify";

const userLogIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log("Пользователь залогинен", user);

    return user;
  } catch (error) {
    toast.error("Login or password incorrect");
    console.log("Ошибка логина", error.message, error.code);
  }
};

export default userLogIn;
