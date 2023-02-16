import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import HeaderImage from "../../assets/meal-back.jpg";
import CartButton from "./CartButton";

function BootNavbar() {
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
            <CartButton></CartButton>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <img className="header-img" src={HeaderImage} alt="Header"></img>
      </div>
    </>
  );
}

export default BootNavbar;
