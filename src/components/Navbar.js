import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./App";

import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import CategoryNav from "./CategoryNav";
import { ReactComponent as ShoppingCart } from "../assets/shared/desktop/icon-cart.svg";

export default function Navbar({ handleShowCart }) {
  const { deviceLayout, handleDropMenu, showDropMenu } = useContext(AppContext);

  return (
    <nav id="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">
          {deviceLayout !== "desktop" && (
            <MenuBtn handleShowMenu={handleDropMenu} />
          )}
          <Logo />
        </div>
        {deviceLayout === "desktop" && (
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/category/headphones">Headphones</Link>
            <Link to="/category/speakers">Speakers</Link>
            <Link to="/category/earphones">Earphones</Link>
          </div>
        )}
        <ShoppingCart className="cart-btn" onClick={handleShowCart} />
      </div>
      {showDropMenu && (
        <div className="drop-menu" onClick={handleDropMenu}>
          <CategoryNav />
        </div>
      )}
    </nav>
  );
}
