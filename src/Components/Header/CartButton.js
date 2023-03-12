import React from "react";
import { Cart4 } from "react-bootstrap-icons";
import "./CartButton.css";
export default function CartButton(props) {
  return (
    <button className="cart-btn" onClick={props.onClick}>
      <span>
        <Cart4 className="cart-icon"></Cart4>
      </span>

      <span>
        Cart
      </span>
      <span className="badge">0</span>
    </button>
  );
}
