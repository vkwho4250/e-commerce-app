import React from "react";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutForm({
  formData,
  handleFormChange,
  totalDetails,
  handleShowPurchaseSuccess,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowPurchaseSuccess();
  };

  return (
    <form>
      <div className="checkout-grid-container">
        <div className="checkout-form grid-item">
          <h3>Checkout</h3>
          <div className="billing-info">
            <p className="subtitle info-header">Billing Details</p>
            <div className="form-section-grid">
              <div>
                <label htmlFor="input-name">Name</label>
                <input
                  type="text"
                  id="input-name"
                  name="name"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="input-email">Email Address</label>
                <input
                  type="email"
                  id="input-email"
                  name="email"
                  placeholder="johndoe@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="input-phone-number">Phone Number</label>
                <input
                  type="tel"
                  id="input-phone"
                  name="phone"
                  placeholder="1-202-555-0136"
                  pattern="1-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="shipping-info">
            <p className="subtitle info-header">Shipping Details</p>
            <div className="form-section-grid">
              <div className="address-input-container">
                <label htmlFor="input-address">Address</label>
                <input
                  type="text"
                  id="input-address"
                  name="address"
                  placeholder="1137 Williams Avenue"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="input-city">City</label>
                <input
                  type="text"
                  id="input-city"
                  name="city"
                  placeholder="Toronto"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="input-province">Province</label>
                <input
                  type="text"
                  id="input-province"
                  name="province"
                  placeholder="Ontario"
                  value={formData.province}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="input-postal-code">Postal Code</label>
                <input
                  type="text"
                  id="input-postal-code"
                  name="postalCode"
                  placeholder="A1A 1A1"
                  pattern="[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="payment-info">
            <p className="subtitle info-header">Payment Details</p>
            <div className="form-section-grid">
              <p className="subtitle payment-method">Payment Method</p>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    id="eMoney"
                    name="payment"
                    value="eMoney"
                    onChange={handleFormChange}
                  ></input>
                  <span
                    className={`custom-radio-btn ${
                      formData.payment === "eMoney" && "active"
                    }`}
                  ></span>
                  e-Money
                </label>
                <label>
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                    onChange={handleFormChange}
                  ></input>
                  <span
                    className={`custom-radio-btn ${
                      formData.payment === "cash" && "active"
                    }`}
                  ></span>
                  Cash on Delivery
                </label>
              </div>
              {formData.payment === "eMoney" && (
                <div
                  className={formData.payment !== "eMoney" ? "no-display" : ""}
                >
                  <label htmlFor="input-money-number">e-Money Number</label>
                  <input
                    type="text"
                    id="input-money-number"
                    name="eMoneyNum"
                    placeholder="12345678 (8 digits)"
                    pattern="\d{8}"
                    value={formData.eMoneyNum}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              )}
              {formData.payment === "eMoney" && (
                <div
                  className={formData.payment !== "eMoney" ? "no-display" : ""}
                >
                  <label htmlFor="input-money-pin">e-Money PIN</label>
                  <input
                    type="text"
                    id="input-money-pin"
                    name="eMoneyPin"
                    placeholder="1234 (4 digits)"
                    pattern="\d{4}"
                    value={formData.eMoneyPin}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <CheckoutSummary
          handleSubmit={handleSubmit}
          totalDetails={totalDetails}
        />
      </div>
    </form>
  );
}
