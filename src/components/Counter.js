import React, { useState } from "react";

export default function Counter() {
  const [itemCount, setItemCount] = useState(1);

  const handleCounterClick = (amount) => {
    setItemCount((prevValue) => Math.max(prevValue + amount, 1));
  };

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
