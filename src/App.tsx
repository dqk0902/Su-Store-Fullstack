import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/CartPage/Cart";
import CreateProduct from "./pages/CreateProductPage/CreateProduct";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/ProductPage/Product";
import Products from "./pages/ProductPage/Products";
import Profile from "./pages/ProfilePage/Profile";
import Register from "./pages/RegisterPage/Register";
import Root from "./pages/RootPage/Root";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="" element={<Root />}>
          <Route path="/products">
            <Route path="" element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/create" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
