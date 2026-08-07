import { getDatabase, ref, remove } from "firebase/database";

const removeFromWatchlist = async (uid, id) => {
  const db = getDatabase();

  try {
    await remove(ref(db, `cinemaverse/v1/users/${uid}/watchlist/${id}`));
    return {
      status: "OK",
      id,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
};

export default removeFromWatchlist;
