import React, { useContext } from "react";
import { ReactComponent as ShoppingCart } from "../assets/shared/desktop/icon-cart.svg";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";

import { Link } from "react-router-dom";

import { AppContext } from "./App";

export default function Navbar() {
  const { handleDeviceLayout } = useContext(AppContext);

  const test = () => {
    console.log("click");
    handleDeviceLayout();
  };

  return (
    <nav id="nav-bar">
      <div className="nav-container">
        <Logo className="svg-icons" onClick={test} />
        <div>
          <Link to="/">Home</Link>
          <Link to="/category/:headphones">Headphones</Link>
          <Link to="/category/:speakers">Speakers</Link>
          <Link to="/category/:earphones">Earphones</Link>
        </div>
        <div className="svg-icons">
          <ShoppingCart className="cart-btn" />
        </div>
      </div>
    </nav>
  );
}
