import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "../../types/category";

const initialState: Category[] = [];

export const fetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async () => {
    try {
      const categories = await axios.get<Category[]>(
        "https://backend-fs13-dqk.azurewebsites.net/categories"
      );
      return categories.data;
    } catch (error) {
      throw error;
    }
  }
);

const CategoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchAllCategories.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
    });
  },
});
export const categoriesReducer = CategoriesSlice.reducer;
export default categoriesReducer;
