import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { fetchAllProducts } from "../redux/reducer/productReducer";

const Products = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  console.log("product list: ", products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default Products;
