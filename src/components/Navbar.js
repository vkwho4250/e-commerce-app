import React from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as ShoppingCart } from "../assets/shared/desktop/icon-cart.svg";

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <Logo className="svg-icons" />
      <div>
        <a href="#">Home</a>
        <a href="#">Headphones</a>
        <a href="#">Speakers</a>
        <a href="#">Earphones</a>
      </div>
      <div className="svg-icons">
        <ShoppingCart />
      </div>
    </nav>
  );
}
