import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: {},
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addMovieToWatchList: (state, { payload }) => {
      state.watchList[payload.id] = payload;
    },
    removeMovieFromWatchList: (state, { payload }) => {
      delete state.watchList[payload.id];
    },
  },
});

export const { addMovieToWatchList, removeMovieFromWatchList } =
  watchListSlice.actions;

export default watchListSlice.reducer;
