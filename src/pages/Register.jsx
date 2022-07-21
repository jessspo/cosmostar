import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {

  const navigate = useNavigate ();

  const navigateWelcome = () => {
    navigate (`/welcome`);
  }

  const navigateLogin = () => {
    navigate (`/login`);
  }

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    
    <div className="form">
              <div className="button-login">
        <input onClick= {navigateLogin}value="Login" type="submit"/>        </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>your full name </label>
          <input type="name" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>date of birth</label>
          <input type="date" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        {/* <div className="input-container">
          <label>city of birth </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>time of birth </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div> */}
        <div className="input-container">
          <label>email</label>
          <input type="email" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        <input onClick= {navigateWelcome}value="Register" type="submit"/>        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}


export default Register;