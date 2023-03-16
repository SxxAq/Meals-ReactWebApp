import React, { useState } from "react";

import { Form } from "react-bootstrap";
import "./MealItemform.css";
export default function MealItemForm() {
  let [inputVal, setInputVal] = useState(1);

  const inputChangePlusHnadler = () => {
    if (inputVal === 10) {
      return;
    } else {
      inputVal = inputVal + 1;
      setInputVal(inputVal);
    }
  };

  const inputChangeMinusHnadler = () => {
    if (inputVal === 0) {
      return;
    } else {
      inputVal = inputVal - 1;
      setInputVal(inputVal);
    }
  };

  return (
    <React.Fragment>
      <Form>
        <div className="item-input">
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
              type="number"
              min="0"
              max="10"
              step="1"
            ></input>
            <button
              className="plus-btn"
              onClick={inputChangePlusHnadler}
              type="button"
            >
              +
            </button>
          </div>
          <button className="add-btn" type="button">
            Add to Cart
          </button>
        </div>
      </Form>
    </React.Fragment>
  );
}
