import React from "react";
import ProductsNavBtn from "./ProductsNavBtn";

import HeadphonesImg from "../assets/products-nav/image-headphones.png";
import EarphonesImg from "../assets/products-nav/image-earphones.png";
import SpeakersImg from "../assets/products-nav/image-speakers.png";

export default function ProductsNav() {
  const products = [
    {
      name: "headphones",
      image: HeadphonesImg,
    },
    {
      name: "speakers",
      image: SpeakersImg,
    },
    {
      name: "earphones",
      image: EarphonesImg,
    },
  ];

  return (
    <section className="product-nav">
      <div className="products-container">
        {products.map((product, index) => {
          return <ProductsNavBtn key={index} product={product} />;
        })}
      </div>
    </section>
  );
}
