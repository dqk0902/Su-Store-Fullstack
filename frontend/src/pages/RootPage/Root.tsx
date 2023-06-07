import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "../../styles/Root.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Root = () => {
  const context = useContext(ThemeContext);
  const isDarkMode = context?.theme.mode === "dark";
  const renderThemeIcon = () => {
    if (isDarkMode) {
      return <Brightness7Icon />;
    } else {
      return <Brightness4Icon />;
    }
  };
  return (
    <div className="min-h-screen">
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
            <Link to="cart" className="cart-links">
              <span>
                <ShoppingCartCheckoutIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link to="login" className="navbar-links">
              Login
            </Link>
          </li>
          <li>
            <Link to="create" className="navbar-links">
              Create Product
            </Link>
          </li>
          <li>
            <button className="toggle-button" onClick={context?.toggleTheme}>
              <span className="toggle-slider"></span>
              {renderThemeIcon()}
            </button>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};

export default Root;
