import React, { useContext } from "react";
import { AppContext } from "../App";
import getLocalImage from "../../getLocalImage";

import ProductsNav from "../CategoryNav";
import PromoItems from "../PromoItems";
import About from "../About";

export default function Home() {
  const { deviceLayout, handleRedirect } = useContext(AppContext);
  const homeBanner = getLocalImage(`home/${deviceLayout}/image-header.jpg`);

  return (
    <div id="home-page">
      <header>
        <img
          src={homeBanner}
          className="home-banner-img"
          alt="homepage banner"
        ></img>
        <div className="home-description">
          <h2 className="overline">New Product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="orange-btn"
            onClick={() => handleRedirect("/product/4")}
          >
            See Product
          </button>
        </div>
      </header>
      <div className="page-content">
        <ProductsNav />
        <PromoItems />
        <About />
      </div>
    </div>
  );
}
