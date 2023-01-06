import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/root.css";

const Root = () => {
  return (
    <div>
      <section className="top-nav">
        <div>Su's Store</div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li className="navbar-itme">
            <Link to="" className="navbar-links">
              Home
            </Link>
          </li>
          <li className="navbar-itme">
            <Link to="products" className="navbar-links">
              Products
            </Link>
          </li>
          <li className="navbar-itme">
            <Link to="profile" className="navbar-links">
              Profile
            </Link>
          </li>
          <li className="navbar-itme">
            <Link to="cart" className="navbar-links">
              Cart
            </Link>
          </li>
          <li className="navbar-itme">
            <Link to="login" className="navbar-links">
              Login
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};

export default Root;
