// login.css and paymentReceipt.css remain the same

import React, { useState } from "react";
import "./login.css";
import PaymentReceipt from "./PaymentReceipt";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "root" && password === "root") {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <PaymentReceipt />;
  }

  return (
    <div className="container">
      <div className="login">
        <h3 className="title">User Login</h3>
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          LOGIN
        </button>

        <a href="#" className="forgot">
          Forgot Username/Password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
