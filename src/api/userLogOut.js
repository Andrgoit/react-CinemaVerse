import { auth, signOut } from "@/firebaseConfig";
import { toast } from "react-toastify";

const userLogOut = async () => {
  try {
    const userCredential = await signOut(auth);
    console.log("Пользователь разлогинен", userCredential);

    return userCredential;
  } catch (error) {
    toast.error("LogOut error");
    console.log("Ошибка разлогина", error.message, error.code);
  }
};

export default userLogOut;
