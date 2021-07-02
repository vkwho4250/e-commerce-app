import React, { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "./App";

export default function Cart({ handleShowCart, handleCheckout }) {
  const { handleItemRemoveAll, cartItems, cartTotal } = useContext(AppContext);
  const handleCloseCart = (e) => {
    if (e.target.id === "cart") {
      handleShowCart();
    }
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
        <button
          className="orange-btn checkout-btn"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
