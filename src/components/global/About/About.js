import React, { useContext } from "react";
import { AppContext } from "./App";
import getLocalImage from "../../../utilities/getLocalImage";

export default function About() {
  const { deviceLayout } = useContext(AppContext);

  const aboutImage = getLocalImage(
    `shared/${deviceLayout}/image-best-gear.jpg`,
  );

  return (
    <section className="about">
      <div className="about-grid-container">
        <div className="about-text-container grid-item">
          <h3>
            Bringing you the <span>best</span> audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={aboutImage} alt="about" className="about-image"></img>
      </div>
    </section>
  );
}
