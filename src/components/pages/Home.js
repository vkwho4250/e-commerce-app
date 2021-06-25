import React from "react";
import homeBannerImg from "../../assets/home-page/image-hero.jpg";
import ProductsNav from "../ProductsNav";
import PromoItems from "../PromoItems";
import About from "../About";

export default function Home() {
  return (
    <div id="home-page">
      <header>
        <img
          src={homeBannerImg}
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
          <button className="orange-btn">See Product</button>
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
