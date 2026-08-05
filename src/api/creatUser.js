import { getDatabase, ref, set } from "firebase/database";

const creatUser = async (uid, user) => {
  const db = getDatabase();

  try {
    await set(ref(db, `cinemaverse/v1/users/${uid}`), user);

    return {
      status: "OK",
      uid,
      ...user,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};

export default creatUser;
