import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  // const [data, setData] = useState(null);
  const loadedMeals = [];
  useEffect(() => {
    setIsLoading(true)
    const firebaseUrl =
      "https://reacthttp-cea03-default-rtdb.firebaseio.com/meals.json";
      const fetchMeals = async () => {
        try {
          const response = await fetch(firebaseUrl);
  
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const responseData = await response.json();
  
          const loadedMeals = [];
          for (const key in responseData) {
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              price: responseData[key].price,
            });
          }
  
          setMeals(loadedMeals);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setHttpError(error.message);
        }
      };
  
      fetchMeals();
    }, []);
  
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
        {isLoading && <p className={classes.loader}>Loading...</p>}
        {httpError && <p className={classes.error}>{httpError}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
