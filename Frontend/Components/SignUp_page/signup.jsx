import React, { useState } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  let navigate = useNavigate();
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " d ", value);
    setuser({ ...user, [name]: value });
  };

  const register = () => {
    const { username, email, password } = user;
    if (username && email && password) {
      axios
        .post("http://localhost:3000/signup", user)
        .then((res) => console.log(res));
    } else {
      alert("not etc");
    }
  };

  return (
    <div className="signup_container">
      <h1>Sign Up</h1>
      <div className="signup_container-inputs">
        <div className="signup_container-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="signup_container-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="signup_container-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="signup_container-terms_condition">
        I agree to the terms and conditions
      </div>

      <div className="signup_container-login_btn">
        <button onClick={register} className="signup_container-login_btn-btn">
          Sign Up
        </button>
      </div>

      <div className="signup_container-below_signup">
        <p>Or Sign Up with</p>
        <br />

        <div className="signup_container-icons">
          <FaFacebook />
          <FaApple />
          <FcGoogle />
        </div>

        <div className="signup_container-already_login">
          Already Have An Account?
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
             Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
