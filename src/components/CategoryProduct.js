import React, { useContext } from "react";
import getLocalImage from "../getLocalImage";
import { AppContext } from "./App";
import Counter from "./Counter";

export default function CategoryProduct({ product, index }) {
  const { deviceLayout } = useContext(AppContext);
  const productImage = getLocalImage(product.image[deviceLayout]);

  return (
    <div className="category-product">
      <img
        src={productImage}
        alt={product.name}
        className="product-image"
        style={index % 2 === 0 ? { order: 1 } : { order: 2 }}
      ></img>
      <div className="product-text-container">
        {product.new && <p className="overline">New Product</p>}
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button className="orange-btn">See Product</button>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  );
}
