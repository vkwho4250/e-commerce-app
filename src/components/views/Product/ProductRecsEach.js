import React, { useContext } from "react";
import { AppContext } from "../../App";
import getLocalImage from "../../../utilities/getLocalImage";

export default function ProductEachRec({ rec }) {
  const { deviceLayout, handleRedirect } = useContext(AppContext);
  const recImage = getLocalImage(rec.image[deviceLayout]);

  return (
    <div className="product-each-rec">
      <img src={recImage} alt={rec.name}></img>
      <h4>{rec.name}</h4>
      <button
        className="orange-btn"
        onClick={() => {
          handleRedirect(`/product/${rec.id}`);
        }}
      >
        See Product
      </button>
    </div>
  );
}
