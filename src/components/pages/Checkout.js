import React, { useContext } from "react";
import { AppContext } from "../App";

import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
export default function Checkout() {
  const { goBack } = useContext(AppContext);

  return (
    <div id="checkout-page">
      <div className="page-content">
        <div className="go-back">
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <div className="checkout-grid-container">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
