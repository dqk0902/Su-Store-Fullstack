import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserWithToken = createAsyncThunk(
  "getUserWithToken",
  async (token: string | null) => {
    try {
      const response = await axios.get(
        "https://backend-fs13-dqk.azurewebsites.net/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return false;
    }
  }
);

export interface UserProfile {
  avatar: string;
  creationAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
}

const initialState: UserProfile | null = null;

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      localStorage.removeItem("userState");
      return (state = null);
    },
  },
  extraReducers: (build) => {
    build.addCase(getUserWithToken.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;

export const { logout } = userSlice.actions;
