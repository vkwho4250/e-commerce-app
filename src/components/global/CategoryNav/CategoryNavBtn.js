import React, { useContext } from "react";
import RightArrowIcon from "../../../assets/shared/desktop/icon-arrow-right.svg";

import { AppContext } from "../../App";

export default function CategoryNavBtn({ category }) {
  const { handleRedirect } = useContext(AppContext);

  return (
    <button
      className="category-nav-btns"
      onClick={() => handleRedirect(`/category/${category.name}`)}
    >
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
    </button>
  );
}
