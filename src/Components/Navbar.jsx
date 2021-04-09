import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ padding: 10 }}>
        Home
      </Link>
      <Link to="/categories" style={{ padding: 10 }}>
        Categories
      </Link>
      <Link to="/about" style={{ padding: 10 }}>
        About
      </Link>
    </div>
  );
};
