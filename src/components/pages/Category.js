import React from "react";
import { useParams } from "react-router-dom";
import CategoryNav from "../CategoryNav";
import About from "../About";
import CategoryProduct from "../CategoryProduct";
import productsData from "../../data.json";

export default function Category() {
  const { handle } = useParams();
  const category = handle.match(/\w+/i)[0];

  const categoryProducts = productsData
    .filter((product) => product.category === category)
    .reverse();

  console.log(categoryProducts);

  return (
    <div id="category-page">
      <header>
        <h1>{category}</h1>
      </header>
      <div className="page-content">
        <section className="category-products">
          {categoryProducts.map((product, index) => {
            return (
              <CategoryProduct key={index} product={product} index={index} />
            );
          })}
        </section>
        <CategoryNav />
        <About />
      </div>
    </div>
  );
}
