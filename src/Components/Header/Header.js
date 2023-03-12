import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

import CartButton from "./CartButton";
import BookButton from "./BookButton";

function BootNavbar(props) {
  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReactMeals</Navbar.Brand>
          <Nav className="ml-auto nav-item">
            <Nav.Link className="nav-link-home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link-meals" href="#Meals">
              Meals
            </Nav.Link>
            <CartButton onClick={props.onShowCart}></CartButton>
            <BookButton></BookButton>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BootNavbar;
