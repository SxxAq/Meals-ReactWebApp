import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeSection from "./Components/Home/HomeSection";
import Meals from "../src/Components/Meals/Meals";
import "./App.css";
import Cart from "./Components/Cart/Cart";

export default function App() {
  const [cartIsShown, setCartISShown] = useState(false);

  const showCartHandler = () => {
    setCartISShown(true);
  };
  const hideCartHandler = () => {
    setCartISShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <HomeSection></HomeSection>
      <Meals></Meals>
    </React.Fragment>
  );
}
