import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import productsData from "../../data.json";

import About from "../About";
import CategoryNav from "../CategoryNav";
import CategoryProduct from "../CategoryProduct";
import ProductFeatures from "../ProductFeatures";
import ProductGallery from "../ProductGallery";
import ProductRecs from "../ProductRecs";

export default function Product() {
  const { productId } = useParams();
  const { goBack } = useContext(AppContext);

  // retrieve specified product data from
  const product = productsData.filter(
    (product) => product.id === parseInt(productId),
  )[0];

  return (
    <div id="product-page" className="page-content">
      <div className="go-back">
        <button onClick={() => goBack()}>Go Back</button>
      </div>
      <section className="product-information">
        <CategoryProduct key={product.id} product={product} page="product" />
        <ProductFeatures product={product} />
      </section>
      <ProductGallery product={product} />
      <ProductRecs product={product} />
      <CategoryNav />
      <About />
    </div>
  );
}
