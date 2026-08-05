import { auth, createUserWithEmailAndPassword } from "@/firebaseConfig";
import { toast } from "react-toastify";

const userSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log("Пользователь зарегистирован", user);
    return user;
  } catch (error) {
    toast.error(error.message);
    console.log("Ошибка регистрации", error.message, error.code);
  }
};

export default userSignUp;
