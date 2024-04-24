import React from "react";
import { useState } from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setLoginUser }) {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " :data: ", value);
    setuser({ ...user, [name]: value });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:3000/login", user).then((res) => {
        setLoginUser(res.data.user);
        navigate("/home");
      });
    } else {
      alert("invalid username or password ");
    }
  };

  return (
    <>
      <div className="signIn_container">
        <h1>Sign In</h1>
        <div className="inputs_container">
          <div className="inputs_container_input">
            <label  htmlFor="email">
              Email
            </label>
            <input
              name="email"
              value={user.email}
              id="email"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="inputs_container_input">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={user.password}
              id="password"
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signIn_container-forgetpass_container">
          <span  onClick={() => {
                navigate("/forget");
              }}>Forget Password?</span>
        </div>

        <div className="signIn_container-login_btn">
          <button onClick={login} className="signIn_container-login_btn-btn" >
            Sign In
          </button>
        </div>
        <div className="line"></div>
        <div className="below_signup">
          <p>Or Sign In with</p>
          <br />

          <div className="icons">
            <FaFacebook />
            <FaApple />
            <FcGoogle />
          </div>

          <div className="already_login">
            Don't Have An Account?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
