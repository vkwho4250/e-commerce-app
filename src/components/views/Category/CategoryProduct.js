import React, { useContext } from "react";
import getLocalImage from "../../../utilities/getLocalImage";
import { AppContext } from "../../App";
import ProductPurchase from "../Product/ProductPurchase";

export default function CategoryProduct({ product, index = "", page }) {
  const { deviceLayout, handleRedirect } = useContext(AppContext);
  const productImage = getLocalImage(product.image[deviceLayout]);

  return (
    <div className="category-product">
      <img
        src={productImage}
        alt={product.name}
        className={`product-image ${index % 2 === 0 ? "" : "flip-order"}`}
      ></img>
      <div className="product-text-container">
        {product.new && <p className="overline">New Product</p>}
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        {page === "category" ? (
          <button
            className="orange-btn"
            onClick={() => handleRedirect(`/product/${product.id}`)}
          >
            See Product
          </button>
        ) : (
          <ProductPurchase product={product} />
        )}
      </div>
    </div>
  );
}
