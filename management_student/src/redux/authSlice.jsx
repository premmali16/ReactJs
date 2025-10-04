import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, user: null },
  reducers: {
    login: (state, action) => {
      const user = action && action.payload ? action.payload : null;
      state.isAuthenticated = true;
      state.user = user;
      localStorage.setItem("auth", "true");
      if (user) {
        try {
          localStorage.setItem("authUser", JSON.stringify(user));
        } catch (_) {
          // ignore storage errors
        }
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("auth");
      localStorage.removeItem("authUser");
    },
    checkAuth: (state) => {
      state.isAuthenticated = localStorage.getItem("auth") === "true";
      if (state.isAuthenticated) {
        try {
          const saved = localStorage.getItem("authUser");
          state.user = saved ? JSON.parse(saved) : null;
        } catch (_) {
          state.user = null;
        }
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
