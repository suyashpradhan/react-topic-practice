import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Router/Home";
import { Categories } from "./Router/Categories";
import { Cart } from "./Router/Cart";
import { ProductDetails } from "./Router/ProductDetail";

const App = () => {
  return (
    <div>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/categories" style={{ marginRight: "1rem" }}>
        Categories
      </Link>
      <Link to="/cart">Cart</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
