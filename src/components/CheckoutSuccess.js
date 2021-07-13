import React, { useContext } from "react";
import { AppContext } from "./App";

import CartItem from "./CartItem";

export default function CheckoutSuccess({
  formData,
  formattedTotalWithTax,
  handlePurchaseComplete,
}) {
  const { cartItems } = useContext(AppContext);
  const formProperties = Object.keys(formData);

  return (
    <div className="checkout-success">
      <div className="success-summary">
        <h4>Thank you for your order!</h4>
        <h6>Your Details</h6>
        <ul className="your-details">
          {formProperties.map((property, index) => {
            return (
              <li key={index}>
                <span className="summary-property">{property}:</span>{" "}
                {formData[property]}
              </li>
            );
          })}
        </ul>
        <h6>Purchase Summary</h6>
        <div className="success-purchase-summary">
          <div className="success-purchase-items">
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
          <div className="success-purchase-total">
            <div>
              <h6>Total</h6>
              <h6>$ {formattedTotalWithTax}</h6>
            </div>
          </div>
        </div>
        <button className="orange-btn" onClick={handlePurchaseComplete}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
