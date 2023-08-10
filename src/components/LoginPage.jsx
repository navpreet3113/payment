import React from "react";
import "./login.css"; // Make sure to create a separate CSS file for the styles
import PaymentReceipt from "./PaymentReceipt";

const LoginPage = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="login">
          <h3 className="title">User Login</h3>
          <div className="text-input">
            <i className="ri-user-fill"></i>
            <input id="username" type="text" placeholder="Username" />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill"></i>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <button className="login-btn">LOGIN</button>

          <a href="#" className="forgot">
            Forgot Username/Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
