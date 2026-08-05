import { getDatabase, ref, set } from "firebase/database";

const addToWatchlist = async (uid, movie) => {
  const db = getDatabase();

  try {
    await set(
      ref(db, `cinemaverse/v1/users/${uid}/watchlist/${movie.id}`),
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

export default addToWatchlist;
