import React, { useContext } from "react";
import { AppContext } from "./App";

import CartItem from "./CartItem";

export default function CheckoutSummary({ totalDetails }) {
  const { cartItems, cartTotal } = useContext(AppContext);

  return (
    <div className="checkout-summary grid-item">
      <h3>Summary</h3>
      <div className="cart-item-container">
        {cartItems.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              cartItem={cartItem}
              location="checkout-summary"
            />
          );
        })}
      </div>
      <div className="flex-row-container">
        <h6>Subtotal</h6>
        <h5>$ {cartTotal.toLocaleString("en-US")}.00</h5>
      </div>
      <div className="flex-row-container">
        <h6>Shipping</h6>
        <h5>$ 25.00</h5>
      </div>
      <div className="flex-row-container">
        <h6>HST</h6>
        <h5>$ {totalDetails.formattedPurchaseHst}</h5>
      </div>
      <div className="flex-row-container">
        <h6>Total</h6>
        <h5 className="grand-total">$ {totalDetails.formattedTotalWithTax}</h5>
      </div>
      <button type="submit" className="orange-btn">
        Continue & Pay
      </button>
    </div>
  );
}
