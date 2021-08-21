import React from "react";
import ProductRecsEach from "./ProductRecsEach";

export default function ProductRecs({ product }) {
  return (
    <section className="product-recs">
      <h3>You may also like</h3>
      <div className="product-recs-container">
        {product.others.map((rec, index) => {
          return <ProductRecsEach key={index} rec={rec} />;
        })}
      </div>
    </section>
  );
}
