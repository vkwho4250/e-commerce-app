import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";

import CheckoutForm from "./CheckoutForm";
import CheckoutSuccess from "./CheckoutSuccess";

export default function Checkout() {
  const { goBack, cartTotal, handleItemRemoveAll, handleRedirect } =
    useContext(AppContext);

  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [totalDetails, setTotalDetails] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    payment: "",
    eMoneyNum: "",
    eMoneyPin: "",
  });

  // Calculate purchase details
  useEffect(() => {
    const calcTotalDetails = () => {
      const purchaseHst = (cartTotal + 25) * 0.13;
      const purchaseCents = String((purchaseHst % 1).toFixed(2)).substring(2);
      const totalWithTax = cartTotal + 25 + Math.floor(purchaseHst);

      const formattedPurchaseHst =
        Math.floor(purchaseHst).toLocaleString("en-US") + "." + purchaseCents;

      const formattedTotalWithTax =
        totalWithTax.toLocaleString("en-US") + "." + purchaseCents;

      setTotalDetails({
        formattedPurchaseHst,
        purchaseCents,
        formattedTotalWithTax,
      });
    };

    if (cartTotal === 0) {
      handleRedirect("/");
    } else {
      calcTotalDetails();
    }
  }, [cartTotal]);

  // after form submission
  const handleShowPurchaseSuccess = () => {
    if (formData.payment !== "eMoney") {
      setFormData((prevValue) => {
        return { ...prevValue, eMoneyNum: "N/A", eMoneyPin: "N/A" };
      });
    }
    setPurchaseComplete(!purchaseComplete);
  };

  //after purchase review
  const handlePurchaseComplete = () => {
    handleShowPurchaseSuccess();
    handleFormReset();
    handleItemRemoveAll();
  };

  const handleFormReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      payment: "",
      eMoneyNum: "",
      eMoneyPin: "",
    });
  };

  // updates form data per input
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div id="checkout-page">
      <div className="page-content">
        <div className="go-back">
          <button onClick={() => goBack()}>Go Back</button>
        </div>
        <CheckoutForm
          formData={formData}
          handleFormChange={handleFormChange}
          totalDetails={totalDetails}
          handleShowPurchaseSuccess={handleShowPurchaseSuccess}
        />
        {purchaseComplete && (
          <CheckoutSuccess
            formData={formData}
            formattedTotalWithTax={totalDetails.formattedTotalWithTax}
            handlePurchaseComplete={handlePurchaseComplete}
          />
        )}
      </div>
    </div>
  );
}
