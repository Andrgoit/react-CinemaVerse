import { auth, signOut } from "@/firebaseConfig";
import { toast } from "react-toastify";

const userLogOut = async () => {
  try {
    await signOut(auth);

    return {
      status: "OK",
    };
  } catch (error) {
    toast.error("LogOut error");
    console.log("LogOut error", error.message, error.code);
  }
};

export default userLogOut;
