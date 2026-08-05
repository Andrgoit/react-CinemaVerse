import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/userSlice";
import favoriteListReducer from "@/redux/favoriteSlice";
import watchListReducer from "@/redux/watchlistSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favoriteList: favoriteListReducer,
    watchList: watchListReducer,
  },
});
