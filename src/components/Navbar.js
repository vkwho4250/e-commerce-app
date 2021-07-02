import React from "react";
import { ReactComponent as ShoppingCart } from "../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";

export default function Navbar({ handleShowCart }) {
  return (
    <nav id="nav-bar">
      <div className="nav-container">
        <Logo className="svg-icons" />
        <div>
          <Link to="/">Home</Link>
          <Link to="/category/headphones">Headphones</Link>
          <Link to="/category/speakers">Speakers</Link>
          <Link to="/category/earphones">Earphones</Link>
        </div>
        <div className="svg-icons">
          <ShoppingCart className="cart-btn" onClick={handleShowCart} />
        </div>
      </div>
    </nav>
  );
}
