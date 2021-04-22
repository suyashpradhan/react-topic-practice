import React from "react";
import { useParams } from "react-router";
import { DB } from "./DB";

export const ProductDetails = () => {
  const { productId } = useParams();
  const data = DB.find((product) => product.id === Number(productId));
  return (
    <div>
      <h1>ProductDetails</h1>
      <h1>{data.product}</h1>
      <p>{data.desc}</p>
    </div>
  );
};
