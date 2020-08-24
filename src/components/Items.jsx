import React from "react";
import {useParams, useRouteMatch, Route, NavLink} from "react-router-dom"; //THIS IS HOOK
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";



// we will be importing and adding a lot of items to this component
function Items(props) {
  const {itemID} = useParams();
  console.log("params", itemID);

  const match = useRouteMatch();
  console.log("match", match);

  //PATH = ROUTE, URL = LINK
  const {path, url} = useRouteMatch();
  //path: "/item-list:item-ID"
  //url: "/item-list/0"

  const shopItem = props.items.find(item => item.id === Number(itemID))
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
       <NavLink to={`${url}/description`}>Description</NavLink>
       <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>
      <Route path={`${path}/description`}>
          <ItemDescription item={shopItem} />
      </Route>
      <Route path={`${path}/shipping`}>
          <ItemShipping item={shopItem} />
      </Route>

    </div>
  );
}
export default Items;
