import React from "react";
// userIsRegistered variable is passed through isRegistered prop
//use ternary operator to determine rendering
//confirm password button is rendered if isRegistered is
//false. writing it like {!props.isRegistered &&} and
//using && operator is like asking is it true that it's false if
//so execute the code on other side of &&. if not render null

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
