import React from "react";
import { useParams } from "react-router-dom";
import CategoryNav from "../CategoryNav";
import About from "../About";
import CategoryProduct from "../CategoryProduct";
import productsData from "../../data.json";

export default function Category() {
  const { categoryName } = useParams();

  const categoryProducts = productsData
    .filter((product) => product.category === categoryName)
    .reverse();

  return (
    <div id="category-page">
      <header>
        <h1>{categoryName}</h1>
      </header>
      <div className="page-content">
        <section className="category-products">
          {categoryProducts.map((product, index) => {
            return (
              <CategoryProduct
                key={index}
                product={product}
                index={index}
                page="category"
              />
            );
          })}
        </section>
        <CategoryNav />
        <About />
      </div>
    </div>
  );
}
