import React, { useContext } from "react";
import { AppContext } from "./App";
import getLocalImage from "../getLocalImage";

export default function ProductGallery({ product }) {
  const { first, second, third } = product.gallery;

  const { deviceLayout } = useContext(AppContext);
  const firstImage = getLocalImage(first[deviceLayout]);
  const secondImage = getLocalImage(second[deviceLayout]);
  const thirdImage = getLocalImage(third[deviceLayout]);

  return (
    <section className="product-gallery">
      <div className="gallery-img">
        <img
          src={firstImage}
          className="first-gallery-img"
          alt={`${product.name} gallery first display`}
        ></img>
      </div>
      <div className="gallery-img">
        <img
          src={secondImage}
          className="second-gallery-img gallery-img"
          alt={`${product.name} gallery second display`}
        ></img>
      </div>
      <img
        src={thirdImage}
        className="third-gallery-img gallery-img"
        alt={`${product.name} gallery third display`}
      ></img>
    </section>
  );
}
