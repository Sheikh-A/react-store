import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log("History", history);

  const routeToShop = () => {
    console.log("Submitting...");
    setTimeout(() => {
      history.push("/item-list")
    }, 1000);
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button onClick={routeToShop} className="md-button shop-button">Shop now!</button>
    </div>
  );
}

export default Home;
