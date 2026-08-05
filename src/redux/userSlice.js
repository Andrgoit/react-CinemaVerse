import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    accessToken: null,
    uid: null,
    displayName: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.user.email = payload.email;
      state.user.accessToken = payload.accessToken;
      state.user.uid = payload.uid;
      state.user.displayName = payload.displayName;
    },
    logOut: (state) => {
      state.user.email = null;
      state.user.accessToken = null;
      state.user.uid = null;
      state.user.displayName = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
