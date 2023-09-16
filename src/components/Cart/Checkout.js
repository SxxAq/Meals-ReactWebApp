import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const formSubmitHandler =(event)=>{
        event.preventDefault();

    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name :</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone :</label>
        <input type="text" id="phone" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address :</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City :</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postalcode">PINCODE :</label>
        <input type="text" id="postalcode" />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
