import React from "react";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <header>
        <ul>
          <Link to="">Home</Link>
          <Link to="products">Products</Link>
          <Link to="profile">Profile</Link>
          <Link to="cart">Cart</Link>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
