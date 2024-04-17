import React, { useState } from "react";
import "./InnovatorAuth.css";

function InnovatorAuth() {
  const [showSignup, setShowSignup] = useState(true);

  const handleSignup = () => {
    console.log(showSignup);
    setShowSignup(false);
  };

  const handleLogin = () => {
    console.log(showSignup);

    setShowSignup(true);
  };
console.log(showSignup);

  return (
    <div className="cont">
      <div className="box-1">
        <div className="content-holder">
          {showSignup ? (
            <>
              <h3 className="fs-1">Don't have an account?</h3>
              <h4 className="fs-3">Please Sign up!</h4>
              <button className="button-1" onClick={handleSignup}>
                Sign up
              </button>
            </>
          ) : (
            <>
              <h3 className="fs-1">If you already have an account,</h3>
              <h4 className="fs-3">just sign in</h4>
              <button className="button-1 " onClick={handleLogin}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

      <div className="box-2">
        {/* Login Form */}
        <div
          className="login-form-container"
          style={{ display: showSignup ? "block" : "none" }}
        >
          <h1 className="fs-1">Login Form</h1>
          <input
            type="text"
            placeholder="Username"
            className="input-field mt-4"
          />
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
        <div
          className="signup-form-container"
          style={{ display: showSignup ? "none" : "block" }}
        >
          <h1 className="fs-1">Sign Up Form</h1>
          <input
            type="text"
            placeholder="Username"
            className="input-field mt-4"
          />
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
