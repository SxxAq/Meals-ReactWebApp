import React, { useState } from "react";

import { Form } from "react-bootstrap";
import "./MealItemform.css";
export default function MealItemForm() {
  let [inputVal, setInputVal] = useState(1);

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

  return (
    <React.Fragment>
      
        <div className="item-input">
        <Form>
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
        </div>
      
    </React.Fragment>
  );
}
