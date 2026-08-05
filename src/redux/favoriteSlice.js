import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: {},
};

export const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    addMovieToFavoriteList: (state, { payload }) => {
      state.favoriteList[payload.id] = payload;
    },
    removeMovieFromFavoriteList: (state, { payload }) => {
      delete state.favoriteList[payload.id];
    },
  },
});

export const { addMovieToFavoriteList, removeMovieFromFavoriteList } =
  favoriteListSlice.actions;

export default favoriteListSlice.reducer;
