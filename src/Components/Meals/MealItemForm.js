
import React, { useState } from "react";

import { Form } from "react-bootstrap";

export default function MealItemForm() {
  const [inputVal, setInputVal]=useState(1);


  const inputChangePlusHnadler=()=>{
    setInputVal((inputVal)=>{
      inputVal+=1
    })
  }

  const inputChangeMinusHnadler=()=>{

  }


  return (
    <React.Fragment>
      <Form>
      <div className="item-input">
      <button onClick={inputChangeMinusHnadler} type="button">-</button>
      <input value={inputVal} type="number" min="0" max="5" step="1"  ></input>
      <button onClick={inputChangePlusHnadler} type="button">+</button>
      </div>
      <button type="button">Add</button>
        
      </Form>
    </React.Fragment>
  );
}
