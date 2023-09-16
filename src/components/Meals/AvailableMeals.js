import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals,setMeals]=useState([])
  // const [data, setData] = useState(null);
  const loadedMeals = [];
  useEffect(() => {
    const firebaseUrl =
      "https://reacthttp-cea03-default-rtdb.firebaseio.com/meals.json";
    const fetchMeals = async () => {
      const response = await fetch(firebaseUrl);
      const responseData = await response.json();

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals)
    };
    fetchMeals();
  })

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
