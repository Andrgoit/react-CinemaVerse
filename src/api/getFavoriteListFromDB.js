import { getDatabase, ref, get } from "firebase/database";
const db = getDatabase();

const getFavoriteListFromDB = async (uid) => {
  try {
    const favoriteListRef = ref(db, `cinemaverse/v1/users/${uid}/favoriteList`);
    const snapshot = await get(favoriteListRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getFavoriteListFromDB;
