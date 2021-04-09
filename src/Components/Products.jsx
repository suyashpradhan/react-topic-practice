import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {[
        { id: 1, product: "Iphone 12" },
        { id: 2, product: "Iphone Mini" },
      ].map(({ id, product }) => {
        return (
          <div key={id}>
            <h3>{product}</h3>
            <Link to={`/product/${id}`}>
              <button>Show Product</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
