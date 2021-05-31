import React from "react";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./PublicRoutes/About";
import { Wishlist } from "./PublicRoutes/Wishlist";
import { Login } from "./Login";
import { Home } from "./PublicRoutes/Home";
import { Cart } from "./PublicRoutes/Cart";
import { Address } from "./PrivateRoutes/Address";
import { Order } from "./PrivateRoutes/Order";
import { PrivateRoute } from "./auth";
import { useAuth } from "./auth-context";

export const App = () => {
  const { login } = useAuth();

  return (
    <>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>
        About
      </Link>
      <Link to="/wishlist" style={{ marginRight: "1rem" }}>
        Wishlist
      </Link>
      <Link to="/cart" style={{ marginRight: "1rem" }}>
        Cart
      </Link>
      <Link to="/address" style={{ marginRight: "1rem" }}>
        Address
      </Link>
      <Link to="/order" style={{ marginRight: "1rem" }}>
        Order
      </Link>

      <Link to="/login">Login</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <PrivateRoute path="/address" login={login} element={<Address />} />
        <PrivateRoute path="/order" login={login} element={<Order />} />
      </Routes>
    </>
  );
};
