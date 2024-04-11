import React, { useState } from "react";
import "./InnovatorAuth.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function InnovatorAuth() {
  const [showText, setShowText] = useState(false);

  const handleSignup = () => {
    setShowText(false);

    document.querySelector(".login-form-container").style.display = "none";
    document.querySelector(".signup-form-container").style.display = "block";
    document.querySelector(".container").style.background =
      "linear-gradient(to bottom, black)";
    document.querySelector(".button-1").style.display = "none";
    document.querySelector(".button-2").style.display = "block";
  };

  const handleLogin = () => {
    setShowText(true);
    document.querySelector(".signup-form-container").style.display = "none";
    document.querySelector(".login-form-container").style.display = "block";
    document.querySelector(".container").style.background =
      "linear-gradient(to bottom, black)";
    document.querySelector(".button-2").style.display = "none";
    document.querySelector(".button-1").style.display = "block";
  };

  return (
    <div className="container">
      <div className="box-1">
        <div className="content-holder">
          {showText ? (
          <>
                <h3>Don't have an account?
                </h3>
                <h4> Please Sign up!</h4>
          </>
          ) : (
            <h3>If you already has an account, <br /> just sign in.</h3>
          )}
          <button className="button-1" onClick={handleSignup}>
            Sign up
          </button>
          <button className="button-2" onClick={handleLogin}>
           Sign In
          </button>
        </div>
      </div>

      <div className="box-2">
        {/* Login Form */}
        <div className="login-form-container">
          <h1 className="fs-1">Login Form</h1>
          <input type="text" placeholder="Username" className="input-field mt-4" />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <br />
          <br />
          <button className="login-button" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        {/* Signup Form */}
        <div className="signup-form-container">
          <h1 className="fs-1">Sign Up Form</h1>
          <input type="text" placeholder="Username" className="input-field mt-4" />
          <br />
          <br />
          <input type="email" placeholder="Email" className="input-field" />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <br />
          <br />
          <button className="signup-button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default InnovatorAuth;
