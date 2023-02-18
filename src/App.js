import React from "react";
import Header from "./Components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeSection from "./Components/Home/HomeSection";

export default function App() {
  return (
    <React.Fragment>
      <Header></Header>

      <HomeSection></HomeSection>
    </React.Fragment>
  );
}
