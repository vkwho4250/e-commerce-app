import React, { useState } from "react";
import Counter from "./Counter";

export default function ProductPurchase({ product }) {
  console.log(product);
  const [itemCount, setItemCount] = useState(1);

  const handleCounterClick = (amount) => {
    setItemCount((prevValue) => Math.max(prevValue + amount, 1));
  };

  const formattedPrice = product.price.toLocaleString("en-US");

  return (
    <div className="product-purchase">
      <h6 className="product-price">{`$ ${formattedPrice}`}</h6>
      <div className="purchase-btns">
        <Counter
          handleCounterClick={handleCounterClick}
          itemCount={itemCount}
        />
        <button className="orange-btn">Add to Cart</button>
      </div>
    </div>
  );
}
