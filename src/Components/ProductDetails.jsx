import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { data } from "../DB";

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id === Number(productId));

  return (
    <div>
      <h1>ProductDetails</h1>
      <h2>{product.product}</h2>
      <Link to="/categories">Go Back</Link>
    </div>
  );
};
