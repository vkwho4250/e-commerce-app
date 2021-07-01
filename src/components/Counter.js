import React, { useState } from "react";

export default function Counter({ handleCounterClick, itemCount }) {
  return (
    <div className="counter">
      <button className="counter-btn" onClick={() => handleCounterClick(-1)}>
        -
      </button>
      <p className="">{itemCount}</p>
      <button className="counter-btn" onClick={() => handleCounterClick(1)}>
        +
      </button>
    </div>
  );
}
