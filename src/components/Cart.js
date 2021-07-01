import React, { useState } from "react";
import CartItem from "./CartItem";

export default function Cart({ cartItems }) {
  const [cartTotal, setCartTotal] = useState("1,123");

  return (
    <div className="cart">
      <div className="cart-summary">
        <div className="flex-row-container">
          <h5>Cart {`(3)`}</h5>
          <button className="remove-all-btn">Remove All</button>
        </div>
        {cartItems.map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem} />;
        })}
        <div className="flex-row-container">
          <h6>Total</h6>
          <h5>$ {cartTotal}</h5>
        </div>
        <button className="orange-btn checkout-btn">Checkout</button>
      </div>
    </div>
  );
}
