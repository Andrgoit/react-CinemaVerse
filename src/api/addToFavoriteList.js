import { getDatabase, ref, set } from "firebase/database";

const addToFavoriteList = async (uid, movie) => {
  const db = getDatabase();

  try {
    await set(
      ref(db, `cinemaverse/v1/users/${uid}/favoriteList/${movie.id}`),
      movie,
    );

    return {
      status: "OK",
      movie,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};

export default addToFavoriteList;
