import React from "react";
import "./forgetpass.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ForgetPass() {
  let navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " d ", value);
    setuser({ ...user, [name]: value });
  };

  const handleForget = () => {
    const { email } = user;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
      axios.post("http://localhost:3000/forget", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Not valid email");
    }
  };

  return (
    <>
      <div className="forgetPass_container">
        <h1 className="forgetPass_container_heading">Forget Password</h1>
        <div className="forgetPass_container_input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder=" Enter Your Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="login_btn">
          <button className="login_btn-btn" onClick={handleForget}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
