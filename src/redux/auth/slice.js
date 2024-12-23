import { createSlice } from "@reduxjs/toolkit";
import { login } from "./operations";

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    balance: 0,
  },
  token: "",
  isLoggedIn: false,
  status: "idle",
  isLoading: true,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeessed";
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user
      state.token = action.payload.token
    }).addCase(login.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    }).addCase(login.rejected, (state, action) => {
      state.status = "rejected";
      state.isLoading = false;
      state.error= action.payload
    })
  },
});

export default authSlice.reducer;