import React from "react";
import { Link } from "react-router-dom";
import { data } from "../DB";

export const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      {data.map(({ id, product }) => {
        return (
          <div key={id}>
            <h3>{product}</h3>
            <Link to={`${id}`}>
              <button>Show Product</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
