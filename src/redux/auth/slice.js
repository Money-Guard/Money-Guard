import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState
});


export default authSlice.reducer