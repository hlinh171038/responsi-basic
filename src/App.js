import React from "react";

import "./App.css";
import Products from "./components/Products";
import Details from "./components/Details";
import Carts from "./components/Carts";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>

        <Route exact path="/" component={Products} />
        <Route path="/products" component={Products} />
        <Route path="/details" component={Details} />
        <Route path="/carts" component={Carts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
