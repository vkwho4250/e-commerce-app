import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import CategoryNav from "../CategoryNav";
import About from "../About";
import CategoryProduct from "../CategoryProduct";
import productsData from "../../data.json";
import getLocalImage from "../../getLocalImage";
import { AppContext } from "../App";

export default function Product() {
  const { handle } = useParams();
  const productId = handle.match(/\w+/i)[0];

  const product = productsData.filter((product) => product.id === productId);

  const { deviceLayout } = useContext(AppContext);
  const productImage = getLocalImage(product.image[deviceLayout]);

  return (
    <div id="product-page" className="page-content">
      <section className="product-information"></section>
    </div>
  );
}
