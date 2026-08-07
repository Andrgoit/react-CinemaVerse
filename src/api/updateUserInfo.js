import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

const updateUserInfo = async (displayName) => {
  try {
    await updateProfile(auth.currentUser, { displayName });
    return {
      status: "OK",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateUserInfo;
