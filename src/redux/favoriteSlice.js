import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: {},
};

export const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    loadFavoriteList: (state, { payload }) => {
      state.favoriteList = { ...payload };
    },
    addMovieToFavoriteList: (state, { payload }) => {
      state.favoriteList[payload.id] = payload;
    },
    removeMovieFromFavoriteList: (state, { payload }) => {
      delete state.favoriteList[payload];
    },
    clearFavoriteList: (state) => {
      state.favoriteList = {};
    },
  },
});

export const {
  addMovieToFavoriteList,
  removeMovieFromFavoriteList,
  clearFavoriteList,
  loadFavoriteList,
} = favoriteListSlice.actions;

export default favoriteListSlice.reducer;
