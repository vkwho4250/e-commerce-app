import React from "react";
import ProductEachRec from "./ProductEachRec";

export default function ProductRecs({ product }) {
  return (
    <section className="product-recs">
      <h3>You may also like</h3>
      <div className="product-recs-container">
        {product.others.map((rec, index) => {
          return <ProductEachRec key={index} rec={rec} />;
        })}
      </div>
    </section>
  );
}
