import React from "react";

export default function MenuBtn({ handleShowMenu }) {
  return (
    <div className="menu-btn" onClick={handleShowMenu}>
      <div className="white-line"></div>
      <div className="white-line"></div>
      <div className="white-line"></div>
    </div>
  );
}
