import React, { useContext } from "react";

import patternCircles from "../assets/home/desktop/pattern-circles.svg";
import getLocalImage from "../getLocalImage";
import { AppContext } from "./App";

export default function PromoItems() {
  const { deviceLayout } = useContext(AppContext);

  const firstPromo = getLocalImage(
    `home/${deviceLayout}/image-speaker-zx9.png`,
  );
  const secondPromo = getLocalImage(
    `home/${deviceLayout}/image-speaker-zx7.jpg`,
  );
  const thirdPromo = getLocalImage(
    `home/${deviceLayout}/image-earphones-yx1.jpg`,
  );

  return (
    <section className="promo-items">
      <div className="promo-items-grid">
        <div className="grid-item first-promo-item">
          <div className="image-container">
            <img
              src={patternCircles}
              className="pattern-circles"
              alt="circle patterns"
            />
            <img src={firstPromo} className="promo-item-1" alt="speaker zx9" />
          </div>
          <div className="first-promo-item-desc">
            <h1>Zx9 Speaker</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="black-btn">See Product</button>
          </div>
        </div>
        <div className="grid-item sub-promo second-promo-item">
          <img
            className="sub-promo-image"
            src={secondPromo}
            alt="speaker zx7"
          />
          <div className="sub-promo-item-desc">
            <h2>Zx9 Speaker</h2>
            <button className="clear-btn">See Product</button>
          </div>
        </div>
        <div className="grid-item sub-promo">
          <img
            src={thirdPromo}
            className="sub-promo-image"
            alt="earphone yx1"
          />
        </div>
        <div className="grid-item sub-promo third-promo-item">
          <div className="sub-promo-item-desc">
            <h2>YX1 Earphones</h2>
            <button className="clear-btn">See Product</button>
          </div>
        </div>
      </div>
    </section>
  );
}
