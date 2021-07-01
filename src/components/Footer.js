import React from "react";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";

import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="page-content">
        <div className="nav-container">
          <Logo className="svg-icons" />
          <div>
            <a href="#">Home</a>
            <a href="#">Headphones</a>
            <a href="#">Speakers</a>
            <a href="#">Earphones</a>
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
          <a href="#">
            <Facebook className="socials-icon" />
          </a>
          <a href="#">
            <Twitter className="socials-icon" />
          </a>
          <a href="#">
            <Instagram className="socials-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
