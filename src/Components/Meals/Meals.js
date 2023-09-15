
import styles from "./Meals.module.css";
import Card from "react-bootstrap/Card";
import MealItemForm from "./MealItemForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    image: require("../../assets/sushi.jpg"),
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    image: require("../../assets/schnitzel.jpg"),
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    image: require("../../assets/bbq-burger.jpg"),
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    image: require("../../assets/green-bowl;.jpg"),
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function Meals() {
  const CardRender = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
      <div className={styles.item} key={props.id}>
        <Card style={{ width: "18rem" }} >
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <h3>{price}</h3>
          </Card.Body>
          <MealItemForm></MealItemForm>
        </Card>
      </div>
    );
  };

  return (
    <div className={styles.card}>{DUMMY_MEALS.map(CardRender)}</div>
  );
}
