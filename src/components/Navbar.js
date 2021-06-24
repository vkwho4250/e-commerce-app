import React from "react";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import { ReactComponent as ShoppingCart } from "../assets/svgs/icon-cart.svg";

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <div className="nav-container">
        <Logo className="svg-icons" />
        <div>
          <a href="#">Home</a>
          <a href="#">Headphones</a>
          <a href="#">Speakers</a>
          <a href="#">Earphones</a>
        </div>
        <div className="svg-icons">
          <ShoppingCart className="cart-btn" />
        </div>
      </div>
    </nav>
  );
}
