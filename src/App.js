import React, {useState} from "react";
import "./styles.css";
import Home from "./components/Home";
import {Route, Link, Switch} from "react-router-dom";
import ItemsList from "./components/ItemsList";
import Items from "./components/Items";
import data from "./data";

export default function App() {
  const [product] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Aladdin's Goods</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/item-list">Shop</Link>

        </div>
      </nav>
      {/* Change this to be rendered by a Route component 👇 */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/item-list">
        <ItemsList items={product} />
      </Route>
      <Route path="/item-list/:itemID">
        <Items items={product}  />
      </Route>
    </div>
  );
}
