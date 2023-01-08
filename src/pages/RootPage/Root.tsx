import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/root.css";

const Root = () => {
  return (
    <div>
      <section className="top-nav">
        <div>
          <Link to="" className="navbar-links">
            Su's Store
          </Link>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="products" className="navbar-links">
              Products
            </Link>
          </li>
          <li>
            <Link to="profile" className="navbar-links">
              Profile
            </Link>
          </li>
          <li>
            <Link to="cart" className="navbar-links">
              Cart
            </Link>
          </li>
          <li>
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
