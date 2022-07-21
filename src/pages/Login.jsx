import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login= () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { setAuthToken } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:3306/log", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email: context.user.email,
        hash_password: context.user.hash_password,
      }),
    })
      .then((response) => {
        if (response.status === 500) {
          context.setUser(context.blankUser);
        }
        return response.json();
      })
    .then((data) => {
      // console.log(data);
      setAuthToken(data.token);
      context.SetLogIn(true);
      // console.log(authToken);
      context.setUser(context.blankUser);
      context.setUserID(data.id);
      navigate("/cards");
    })
  }

  return (
    <div className="login-page-container">
      <div className="login_page">
        <div>
          <h1 className="text">Log in to your account</h1>
        </div>
        <form onSubmit={handleLogin} className="loginForm" >
          <input
            value={context.user.email}
            onChange={context.handleLogReg}
            name="email"
            placeholder="Email"
          />
          <hr className="create-card-form-divider" />
          <input
            value={context.user.hash_password}
            onChange={context.handleLogReg}
            name="hash_password"
            placeholder="Password"
            type="password"
          />
          <hr className="create-card-form-divider" />
          <input className="reg" type="submit" value="Submit" />
        </form>
        <span className="forgotPassword">
          <a href="https://www.w3schools.com">Forgot password?</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
