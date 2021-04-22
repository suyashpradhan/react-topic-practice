import React from "react";
import { Link } from "react-router-dom";
import { DB } from "./DB";

export const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      {DB.map(({ id, product }) => {
        return (
          <div key={id}>
            {product} <Link to={`/product-details/${id}`}>View Details</Link>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};
