import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="page-content">
        <div className="nav-container">
          <Logo />
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/category/headphones">Headphones</Link>
            <Link to="/category/speakers">Speakers</Link>
            <Link to="/category/earphones">Earphones</Link>
          </div>
        </div>
        <div className="footer-text">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="disclaimer">
            Challenge By{" "}
            <a href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx">
              Frontend Mentor
            </a>
            . Coded by Victoria Ho
          </p>
        </div>
        <div className="socials">
          <Link to="#">
            <Facebook className="socials-icon" />
          </Link>
          <Link to="#">
            <Twitter className="socials-icon" />
          </Link>
          <Link to="#">
            <Instagram className="socials-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
