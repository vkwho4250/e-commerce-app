import React from "react";
import CategoryNavBtn from "./CategoryNavBtn";

import headphonesImg from "../../../assets/shared/desktop/image-headphones.png"
import earphonesImg from "../../../assets/shared/desktop/image-earphones.png";
import speakersImg from "../../../assets/shared/desktop/image-speakers.png";

export default function CategoryNav() {
  const categories = [
    {
      name: "headphones",
      image: headphonesImg,
    },
    {
      name: "speakers",
      image: speakersImg,
    },
    {
      name: "earphones",
      image: earphonesImg,
    },
  ];

  return (
    <section className="category-nav">
      <div className="categories-container">
        {categories.map((category, index) => {
          return <CategoryNavBtn key={index} category={category} />;
        })}
      </div>
    </section>
  );
}
