import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import CategoryNav from "../CategoryNav";
import About from "../About";
import CategoryProduct from "../CategoryProduct";
import productsData from "../../data.json";

export default function Product() {
  const { productId } = useParams();

  const product = productsData.filter(
    (product) => product.id === parseInt(productId),
  );

  return (
    <div id="product-page" className="page-content">
      <section className="product-information">
        <CategoryProduct key={product.id} product={product[0]} page="product" />
        <div>
          {/* Features */}
          {/* in the box */}
        </div>
      </section>
      <CategoryNav />
      <About />
    </div>
  );
}
