import React from "react";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const { id, token } = useParams();
  let navigate = useNavigate();
  const [user, setuser] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, " d ", value);
    setuser({ ...user, [name]: value });
  };

  const handleReset = () => {
    const { password } = user;

    if (password) {
      axios
        .post(`http://localhost:3000/reset-password/${id}/${token}/`, user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        });
    } else {
      alert("Not valid password");
    }
  };

  return (
    <>
      <div className="resetPass_container">
        <h1 className="resetPass_container_heading">Reset Password</h1>
        <div className="resetPass_container_input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder=" Enter Your New Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="resetPass_container_input">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="resetPass_btn">
          <button
            className="resetPass_btn-btn"
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
