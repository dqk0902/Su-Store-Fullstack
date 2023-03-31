import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { CreateProductType, Product, UpdateProduct } from "../../types/product";
const initialState: Product[] = [];
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const products = await axios.get<Product[]>(
        "https://backend-fs13-dqk.azurewebsites.net/products"
      );
      return products.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async (product: CreateProductType, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Product, Product> = await axios.post(
        "https://backend-fs13-dqk.azurewebsites.net/products",
        product
      );
      alert("Create Product successful");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Failed to create product.");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (product: UpdateProduct) => {
    try {
      const response = await axios.put(
        `https://backend-fs13-dqk.azurewebsites.net/products/${product.id}`,
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
    sortByName: (state, action: PayloadAction<"Asc" | "Desc">) => {
      if (action.payload === "Asc") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        state.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    sortByPrice: (
      state,
      action: PayloadAction<"Highest Price" | "Lowest Price">
    ) => {
      if (action.payload === "Lowest Price") {
        state.sort((a, b) => a.price - b.price);
      } else {
        state.sort((a, b) => b.price - a.price);
      }
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
    build.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].price = action.payload.price;
      state[index].title = action.payload.title;
      state[index].description = action.payload.description;
    });
  },
});
const productReducer = productSlice.reducer;
export const { sortByName, deleteItem, sortByPrice } = productSlice.actions;
export default productReducer;
