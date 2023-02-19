
import Card from 'react-bootstrap/Card';

function MealCard(props) {
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <h3>{props.price}</h3>
      </Card.Body>
    </Card>
  );
}

export default MealCard;