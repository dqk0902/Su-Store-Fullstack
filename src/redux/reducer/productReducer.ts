import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CreateProduct, Product } from "../../types/product";
const initialState: Product[] = [];
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const jsondata = await fetch("https://api.escuelajs.co/api/v1/products");
      const data: Product[] | Error = await jsondata.json();
      return data;
    } catch (e: any) {
      console.log(e);
    }
  }
);
export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: CreateProduct) => {
    try {
      const response: AxiosResponse<Product, Product> = await axios.post(
        "https://api.escuelajs.co/api/v1/products/",
        product
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {
    sortByName: (state, action: PayloadAction<"asc" | "desc">) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        state.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchAllProducts.fulfilled, (state, action) => {
      if (action.payload && "message" in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
      //setState(action.payload)
    });
    build.addCase(fetchAllProducts.rejected, (state, action) => {
      console.log("error in fetching data");
      return state;
    });
    build.addCase(fetchAllProducts.pending, (state, action) => {
      console.log("data is loading ...");
      return state;
    });
    build.addCase(createProduct.fulfilled, (state, action) => {
      if (action.payload) {
        state.push(action.payload);
      } else {
        return state;
      }
    });
  },
});
const productReducer = productSlice.reducer;
export const { sortByName, deleteItem } = productSlice.actions;
export default productReducer;
