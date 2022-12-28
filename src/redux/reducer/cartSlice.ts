import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

export interface CartProduct extends Product {
  quantity: number;
}
const initialState: CartProduct[] = [];
export const cartSlice = createSlice({
  name: "cart",
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
    removeItem: (state, action) => {
      const removeItem = state.filter((item) => item.id !== action.payload);
      state = removeItem;
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
export default cartReducer;
