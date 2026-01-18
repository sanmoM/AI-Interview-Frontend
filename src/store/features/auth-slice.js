import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
      document.cookie = `token=; path=/; max-age=86400; SameSite=Lax`;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
