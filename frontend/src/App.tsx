import React, { useContext } from "react";
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
import { ThemeContext } from "./ThemeContext";
import "./styles/Theme.css";
const App = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={
        themeContext?.theme.mode === "dark" ? "dark-theme" : "light-theme"
      }
    >
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
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
