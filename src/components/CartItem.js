import React from "react";
import Counter from "./Counter";
import getLocalImage from "../getLocalImage";
import productsData from "../data.json";

export default function CartItem({ cartItem }) {
  const handleCartItemClick = () => {};

  const itemProduct = productsData.filter(
    (product) => product.id === cartItem.productId,
  )[0];

  const itemImage = getLocalImage(`cart/image-${itemProduct.slug}.jpg`);
  const formattedPrice = itemProduct.price.toLocaleString("en-US");

  return (
    <div className="cart-item">
      <img src={itemImage} className="cart-item-img" alt={itemProduct.name} />
      <div className="cart-item-details">
        <p>{itemProduct.name}</p>
        <p>$ {formattedPrice}</p>
      </div>
      <Counter
        handleCounterClick={handleCartItemClick}
        itemCount={cartItem.quantity}
      />
    </div>
  );
}
