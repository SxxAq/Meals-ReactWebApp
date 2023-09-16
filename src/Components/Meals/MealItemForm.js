import React, { useState,useRef } from "react";

import { Form } from "react-bootstrap";
import "./MealItemform.css";
export default function MealItemForm(props) {
  let [inputVal, setInputVal] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const inputChangePlusHnadler = () => {
    if (inputVal === 10) {
      return;
    } else {
      setInputVal((inputVal) => inputVal+=1);
    }
  };

  const inputChangeMinusHnadler = () => {
    if (inputVal === 0) {
      return;
    } else {
      setInputVal((inputVal) => inputVal-=1);
    }
  };
  const inputChangeHandler = ({ target: { value } }) => {
    if (inputVal <= 10 || inputVal >= 0) {
      setInputVal(value);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      
        <div className="item-input">
        <Form onSubmit={submitHandler}>
          <div className="input-form">
            <button
              className="minus-btn"
              onClick={inputChangeMinusHnadler}
              type="button"
            >
              -
            </button>
            <input
              value={inputVal}
              onChange={inputChangeHandler}
              type="number" min="0" max="10" step="1" maxLength="2"
            ></input>
            <button
              className="plus-btn"
              onClick={inputChangePlusHnadler}
              type="button"
            >
              +
            </button>
          </div>
          </Form>
          <button className="add-btn" type="button">
            Add to Cart
          </button>
          {!amountIsValid && <p>Valid Amount(1-5).</p>}
        </div>
      
    </React.Fragment>
  );
}
