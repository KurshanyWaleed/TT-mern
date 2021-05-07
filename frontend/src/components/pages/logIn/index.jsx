import React, { useState } from "react";
import "./style.css";
import SignIn from "../logIn/signIn";
import SignUp from "../logIn/signUp";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

function Log() {
  const styleb = { width: "50%", height: "50px" };
  const [isActive, setIsActive] = useState(false);
  const handeOnClick = (e) => {
    console.log(e.target);
    console.log(isActive);
    e.target.id === "signin" ? setIsActive(true) : setIsActive(false);
  };
  return (
    <div className="bg">
      <div className="Container">
        <input
          type="button"
          value="Sign In"
          id="signin"
          className="btn"
          style={styleb}
          onClick={handeOnClick}
        ></input>
        <input
          className="btn"
          type="button"
          value="Sign Up"
          id="signUp"
          style={styleb}
          onClick={handeOnClick}
        ></input>
        <div>{isActive ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
}

export default Log;
