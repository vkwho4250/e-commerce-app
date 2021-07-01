import React from "react";

import { useParams, Link } from "react-router-dom";
import CategoryNav from "../CategoryNav";
import About from "../About";
import CategoryProduct from "../CategoryProduct";
import ProductFeatures from "../ProductFeatures";
import ProductGallery from "../ProductGallery";
import ProductRecs from "../ProductRecs";

import productsData from "../../data.json";

export default function Product() {
  const { productId } = useParams();

  const product = productsData.filter(
    (product) => product.id === parseInt(productId),
  )[0];

  return (
    <div id="product-page" className="page-content">
      <div className="go-back">
        <Link to={`/category/${product.category}`}>Go Back</Link>
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
