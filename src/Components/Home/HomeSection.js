import React from "react";
import MealsSummary from "../Meals/MealsSummary";
import "./HomeSection.css";
export default function HomeSection() {
  return (
    <section className="home">
    <img src={require('../../assets/meal-back.jpg')} alt='Homepage' width=''></img>
    <MealsSummary></MealsSummary>
    </section>
  );
}
