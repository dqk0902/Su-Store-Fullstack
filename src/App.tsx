import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Root from "./pages/Root";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="/products">
            <Route path="" element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
