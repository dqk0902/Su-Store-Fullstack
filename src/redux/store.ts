import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartSlice";
import categoriesReducer from "./reducer/categoryReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
  reducer: {
    categoriesReducer,
    productReducer,
    cartReducer,
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
