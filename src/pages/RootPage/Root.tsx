import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/root.css";

const Root = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="./" id="navbar-logo">
            Su's Store
          </a>
          <div className="navbar-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar-menu">
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
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
