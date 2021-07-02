import React, { useContext } from "react";
import Counter from "./Counter";
import getLocalImage from "../getLocalImage";
import productsData from "../data.json";
import { AppContext } from "./App";

export default function CartItem({ cartItem }) {
  const { handleItemDelete, handleItemEdit } = useContext(AppContext);

  const handleCartItemClick = (amount) => {
    const newQuantity = cartItem.quantity + amount;

    if (newQuantity === 0) {
      handleItemDelete(cartItem.id);
    } else {
      handleItemEdit(cartItem.id, newQuantity);
    }
  };

  const listOfProducts = [...productsData];

  const itemProduct = listOfProducts.filter(
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
