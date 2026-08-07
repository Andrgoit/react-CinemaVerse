import { getDatabase, ref, get } from "firebase/database";

const db = getDatabase();

const getWatchListFromDB = async (uid) => {
  try {
    const watchListRef = ref(db, `cinemaverse/v1/users/${uid}/watchList`);
    const snapshot = await get(watchListRef);

    if (snapshot.exists()) {
      return snapshot.val();
    }

    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getWatchListFromDB;
