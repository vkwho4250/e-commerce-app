import React from "react";

export default function ProductFeatures({ product }) {
  return (
    <div className="product-features">
      <div className="features">
        <h3>Features</h3>
        <p>{product.features}</p>
      </div>
      <div className="in-the-box">
        <h3>In the Box</h3>
        <ul>
          {product.includes.map((include, index) => {
            return (
              <li key={index}>
                <span>{include.quantity}x</span> {include.item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
