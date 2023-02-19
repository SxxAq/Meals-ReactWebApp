import React from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeSection from "./Components/Home/HomeSection";
import Meals from '../src/Components/Meals/Meals'


export default function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <HomeSection></HomeSection>
      <Meals></Meals>
      
    </React.Fragment>
  );
}
