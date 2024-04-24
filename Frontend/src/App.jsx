import Signup from '../Components/SignUp_page/signup';
import Login from '../Components/login_page/login';
import Home from '../Components/Home/Home';
import ForgetPass from '../Components/Forget_pass/forgetPass';
import ResetPassword from '../Components/Reset_password/ResetPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import NavLayout from '../Components/Navbar/Nav_layout/NavLayout';
import Landing_page from '../Components/Landing_page/Landing_page';

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout/>} />
        <Route
          path="/home"
          element={loginUser && loginUser._id ? 
          
          <Home /> 
          
          : <Login setLoginUser={setLoginUser} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
