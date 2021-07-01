import React from "react";
import RightArrowIcon from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

export default function CategoryNavBtn({ category }) {
  return (
    <Link to={`/category/:${category.name}`} className="category-nav-link">
      <div className="category-nav-btns">
        <div className="gray-block"></div>
        <img
          className="category-image"
          src={category.image}
          alt={`${category.name}`}
        />
        <h6>{category.name}</h6>
        <div className="shop-text">
          <p>Shop</p>
          <img
            className="right-arrow"
            src={RightArrowIcon}
            alt="right arrow icon"
          />
        </div>
      </div>
    </Link>
  );
}
