import React from "react";
import Button from 'react-bootstrap/Button';
import './MealsSummary.css'

export default function MealsSummary() {
  return (
    <section className="summary">
      <h2>IF MUSIC BE THE FOOD OF LOVE PLAY ON</h2>
      <h1 className="">RESTAURENT</h1>
      <p>
        Food, in the end, in our own tradition, is something holy. It's not
        about nutrients and calories. It's about sharing. It's about honesty.
        It's about identity.
      </p>
      <Button variant="outline-secondary">VIEW THE MENU</Button>{' '}
    </section>
  );
}
