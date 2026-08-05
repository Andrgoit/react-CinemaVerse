import { getDatabase, ref, remove } from "firebase/database";

const removeFromFavoriteList = async (uid, id) => {
  const db = getDatabase();

  try {
    await remove(ref(db, `cinemaverse/v1/users/${uid}/favoriteList/${id}`));
    return {
      status: "OK",
      id,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};

export default removeFromFavoriteList;
