import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAxiosInstance, setAuthAxios } from "../api/authAxios";

export const login = createAsyncThunk(
  "auth/login",
  async (userLoginData, thunkAPI) => {
    try {
      const response = await authAxiosInstance.post(
        "api/auth/sign-in",
        userLoginData
      );
      const token = response.data.token;

      setAuthAxios(token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userRegisterData, thunkAPI) => {
    try {
      const response = await authAxiosInstance.post(
        "api/auth/sign-up",
        userRegisterData
      );
      const token = response.data.token;
      setAuthAxios(token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await authAxiosInstance.delete("api/auth/sign-out");
    setAuthAxios("");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
