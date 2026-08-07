import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: {},
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    loadWatchList: (state, { payload }) => {
      state.watchList = { ...payload };
    },
    addMovieToWatchList: (state, { payload }) => {
      state.watchList[payload.id] = payload;
    },
    removeMovieFromWatchList: (state, { payload }) => {
      delete state.watchList[payload];
    },
    clearWatchList: (state) => {
      state.watchList = {};
    },
  },
});

export const {
  addMovieToWatchList,
  removeMovieFromWatchList,
  clearWatchList,
  loadWatchList,
} = watchListSlice.actions;

export default watchListSlice.reducer;
