import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Router from "./components/Pages/Router/Router";

function App() {
  return (
    <div className="App">
      {/* <div>
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link to="/AboutUs">
          <p>AboutUs</p>
        </Link>
        <Link to="/ContatUs">
          <p>ContatUs</p>
        </Link>
        <Link to="/Shopping/mens-shirt">
          <p>Shopping</p>
        </Link>
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/ContatUs" Component={ContatUs} />
        <Route path="/Shopping/:ProductCategory" Component={Shopping} />
        <Route path="/blog/:ProductCategoryItem" Component={Blog} />
      </Routes> */}

      <Router />
    </div>
  );
}

export default App;
