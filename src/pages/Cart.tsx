import React from "react";
import { useAppSelector } from "../hooks/reduxHook";

const Cart = () => {
  const cartItem = useAppSelector((state) => state.cartReducer);
  return (
    <>
      {cartItem.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
};

export default Cart;
