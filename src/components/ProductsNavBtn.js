import React from "react";
import RightArrowIcon from "../assets/products-nav/icon-arrow-right.svg";

export default function ProductsNavBtn({ product }) {
  return (
    <div className="products-nav-btns">
      <div className="gray-block"></div>
      <img
        className="category-image"
        src={product.image}
        alt={`${product.name}`}
      />
      <h6>{product.name}</h6>
      <div className="shop-text">
        <p>Shop</p>
        <img
          className="right-arrow"
          src={RightArrowIcon}
          alt="right arrow icon"
        />
      </div>
    </div>
  );
}
