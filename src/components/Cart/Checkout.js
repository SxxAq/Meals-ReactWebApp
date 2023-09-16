import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    phone: true,
    address: true,
    city: true,
    postalcode: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressRef = useRef();
  const cityInputRef = useRef();
  const pinInputRef = useRef();

  //   const formSubmitHandler = (event) => {
  //     event.preventDefault();
  //     const enteredName = nameInputRef.current.value;
  //     const enteredAddress = addressRef.current.value;
  //     const enteredPhone = phoneInputRef.current.value;
  //     const enteredCity = cityInputRef.current.value;
  //     const enteredPin = pinInputRef.current.value;

  //     const enterednameIsvalid = !isEmpty(enteredName);
  //     const enteredPhoneIsValid = !isNot10chars(enteredPhone);
  //     const enteredAddressValid = !isEmpty(enteredAddress);
  //     const enteredCityValid = !isEmpty(enteredCity);
  //     const enteredPinIsValid = !isNot8chars(enteredPin);

  //     setFormInputValidity({
  //       name: enterednameIsvalid,
  //       phone: enteredPhoneIsValid,
  //       address: enteredAddressValid,
  //       city: enteredCityValid,
  //       postalcode: enteredPinIsValid,
  //     });

  //     const formIsValid =
  //       enterednameIsvalid &&
  //       enteredAddressValid &&
  //       enteredCityValid &&
  //       enteredPhoneIsValid &&
  //       enteredPinIsValid;

  //     if (!formIsValid) {
  //       return;
  //     }
  //   };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPin = pinInputRef.current.value;

    const formIsValid =
      !isEmpty(enteredName) &&
      enteredPhone.length === 10 &&
      !isEmpty(enteredAddress) &&
      !isEmpty(enteredCity) &&
      enteredPin.length === 8;

    setFormInputValidity({
      name: !isEmpty(enteredName),
      phone: enteredPhone.length === 10,
      address: !isEmpty(enteredAddress),
      city: !isEmpty(enteredCity),
      postalcode: enteredPin.length === 8,
    });

    if (!formIsValid) {
      return;
    }
  };
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const phonecontrolClasses = `${classes.control} ${
    formInputValidity.phone ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputValidity.address ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const pinControlClasses = `${classes.control} ${
    formInputValidity.postalcode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name :</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={phonecontrolClasses}>
        <label htmlFor="phone">Phone :</label>
        <input type="number" id="phone" ref={phoneInputRef} />
        {!formInputValidity.phone && <p>Please enter a valid Phone number.</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address :</label>
        <input type="text" id="address" ref={addressRef} />
        {!formInputValidity.address && <p>Please enter a valid Address.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City :</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid City.</p>}
      </div>
      <div className={pinControlClasses}>
        <label htmlFor="postalcode">PINCODE :</label>
        <input type="number" id="postalcode" ref={pinInputRef} />
        {!formInputValidity.postalcode && <p>Please enter a valid PIN.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
