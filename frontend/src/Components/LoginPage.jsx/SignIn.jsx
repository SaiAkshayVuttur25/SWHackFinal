import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ setlogin }) => {
  const [currState, SetCurrState] = useState("Login");

  const [logdata, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // You can add logic here to handle login/signup
    setlogin(false);
  };

  return (
    <section>
      <div className="login-popup">
        <form className="login-popup-container" onSubmit={handleSignIn}>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setlogin(false)}
              src="/delete.png"
              alt="close"
              className="delete-img"
            />
          </div>

          <div className="login-popup-inputs">
            {currState === "SignUp" && (
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={logdata.name}
                onChange={adddata}
                required
              />
            )}
            <input
              type="email"
              placeholder="Your email"
              onChange={adddata}
              value={logdata.email}
              name="email"
              id="email"
              required
            />
            <input
              type="password"
              onChange={adddata}
              value={logdata.password}
              name="password"
              placeholder="Password at least 6 char"
              id="password"
              required
            />
            <div className="radio-options">
            <label for="role">Select your role:</label>
            <select id="role" name="role">
              <option value="vendor">Vendor</option>
              <option value="customer">Customer</option>
            </select>
            </div>
          </div>

          <button type="submit">
            {currState === "SignUp" ? "Create Account" : "Login"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing this, I agree to terms & conditions</p>
          </div>

          {currState === "Login" ? (
            <p>
              Create a New Account?{" "}
              <span onClick={() => SetCurrState("SignUp")}>Click Here</span>
            </p>
          ) : (
            <p>
              Already Have An Account?{" "}
              <span onClick={() => SetCurrState("Login")}>Login Here</span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
