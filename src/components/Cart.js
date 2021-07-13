import React, { useContext } from "react";
import { AppContext } from "./App";

import CartItem from "./CartItem";

export default function Cart({ handleShowCart }) {
  const { handleItemRemoveAll, cartItems, cartTotal, handleRedirect } =
    useContext(AppContext);

  const handleCloseCart = (e) => {
    if (e.target.id === "cart") {
      handleShowCart();
    }
  };

  const goToCheckout = () => {
    handleShowCart();
    handleRedirect("/checkout");
  };

  return (
    <div id="cart" onClick={handleCloseCart}>
      <div className="cart-summary">
        <div className="flex-row-container">
          <h5>Cart {`(${cartItems.length})`}</h5>
          <button
            className="remove-all-btn"
            onClick={() => handleItemRemoveAll()}
          >
            Remove All
          </button>
        </div>
        <div className="cart-items-container">
          {cartItems.map((cartItem, index) => {
            return <CartItem key={index} cartItem={cartItem} />;
          })}
        </div>
        <div className="flex-row-container">
          <h6>Total</h6>
          <h5>$ {cartTotal.toLocaleString("en-US")}</h5>
        </div>
        {cartItems.length > 0 && (
          <button className="orange-btn checkout-btn" onClick={goToCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}
