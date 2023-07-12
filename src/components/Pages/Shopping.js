import React from "react";
import { Routes, Link } from "react-router-dom";

export default function Shopping() {
  return (
    <div className="page" style={{ backgroundColor: "blue" }}>
      <ul>
        <Link to="/blog/mensT-shirt">
          <p>Mens T-shirt</p>
        </Link>
        <Link to="/blog/womensT-shirt">
          <p>Womens T-shirt</p>
        </Link>
        <Link to="/blog/shoes">
          <p>Shoes</p>
        </Link>
      </ul>
    </div>
  );
}
