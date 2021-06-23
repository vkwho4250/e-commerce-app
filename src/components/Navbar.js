import React from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";

export default function Navbar() {
  return (
    <nav id="nav-bar">
      <Logo />
      <div>
        <a href="#">Home</a>
        <a href="#">Headphones</a>
        <a href="#">Speakers</a>
        <a href="#">Earphones</a>
      </div>
    </nav>
  );
}
