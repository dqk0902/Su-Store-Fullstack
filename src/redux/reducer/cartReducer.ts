import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

export interface CartProduct extends Product {
  quantity: number;
}
const initialState: CartProduct[] = [];
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.find((item) => item.id === action.payload && item.quantity++);
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        state.find((item) => item.id === action.payload && item.quantity--);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartReducer;
