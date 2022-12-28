import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartSlice";
export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
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
