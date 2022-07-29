import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserDatabase } from "../data/UserDatabase";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { setAuthToken } = useContext(AuthContext);

  const navigateWelcome = () => {
    navigate(`/welcome`);
  };

  const navigateLogin = () => {
    navigate(`/login`);
  };

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { firstName, lastName, dateOfBirth, email, password } =
      document.forms[0];

    // Find user login info
    if (UserDatabase.find((user) => user.email === email.value)) {
      setErrorMessages({
        name: "email",
        message: "Email already has an account.",
      });
      return;
    }

    // TODO: verify all fields
    UserDatabase.push({
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: new Date(dateOfBirth.value),
    });

    setAuthToken(email.value);
    setIsSubmitted(true);
    navigateWelcome();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
      <div className="button-login">
        <input onClick={navigateLogin} value="Login" type="submit" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>first name</label>
          <input type="name" name="firstName" required />
          {renderErrorMessage("firstName")}
        </div>
        <div className="input-container">
          <label>last name</label>
          <input type="name" name="lastName" required />
          {renderErrorMessage("lastName")}
        </div>
        <div className="input-container">
          <label>date of birth</label>
          <input type="date" name="dateOfBirth" required />
          {renderErrorMessage("dateOfBirth")}
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
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>password </label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input value="Register" type="submit" />
        </div>
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
};

export default Register;
