import React from "react";
import RightArrowIcon from "../assets/svgs/icon-arrow-right.svg";

export default function ProductsNavBtn({ product }) {
  return (
    <div className="products-nav-btns">
      <div className="gray-block"></div>
      <img src={product.image} alt={`${product.name}`} />
      <h3>{product.name}</h3>
      <div className="shop-text">
        <p>Shop</p>
        <img
          className="right-arrow"
          src={RightArrowIcon}
          alt="right arrow icon"
        ></img>
      </div>
    </div>
  );
}
