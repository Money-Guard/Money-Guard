import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout } from "./operations";

const initialState = {
  user: {
    username: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  status: "idle",
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeessed";
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "successed";
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "successed";
        state.isLoggedIn = false;
        state.user = null;
        state.token = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default authSlice.reducer;
