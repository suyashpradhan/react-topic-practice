import React, { useState } from "react";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Categories from "./Categories";
import Address from "./PrivateRoutes/Address";
import Login from "./Login";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Link to="/categories" style={{ paddingRight: "1rem" }}>
        Categories
      </Link>
      <Link to="/wishlist" style={{ paddingRight: "1rem" }}>
        Wishlist
      </Link>
      <Link to="/cart" style={{ paddingRight: "1rem" }}>
        Cart
      </Link>
      <Link to="/address" style={{ paddingRight: "1rem" }}>
        Address
      </Link>

      <button onClick={() => setLogin((login) => !login)}>
        {login ? "logout" : "login"}
      </button>

      <Routes>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        {login && <Route path="/address" element={<Address />}></Route>}
        {!login && <Route path="/address" element={<Login />}></Route>}
      </Routes>
    </>
  );
}

export default App;
