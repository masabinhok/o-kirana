import React from "react";
import { logo } from "../assets/index.js";
import { useState } from "react";
import LoginInterface from "../components/LoginInterface.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import { Link } from "react-router-dom";

const Auth = ({ setIsAuth }) => {
  const [auth, setAuth] = useState("AUTH");
  const renderAuthComponent = () => {
    switch (auth) {
      case "AUTH":
        return <LoginInterface setAuth={setAuth} />;
      case "SIGNUP":
        return <Signup setAuth={setAuth} />;
      case "ADMIN":
        return <Login role={"ADMIN"} setIsAuth={setIsAuth} setAuth={setAuth} />;
      case "CUSTOMER":
        return (
          <Login setIsAuth={setIsAuth} setAuth={setAuth} role={"CUSTOMER"} />
        );
      case "SELLER":
        return (
          <Login setIsAuth={setIsAuth} role={"SELLER"} setAuth={setAuth} />
        );
      default:
        return null;
    }
  };
  return (
    <div className="container flex min-h-screen w-full ">
      <div className="container bg-zinc-900 text-white flex items-center justify-center ">
        {renderAuthComponent()}
      </div>
      <div className="container flex items-center justify-center p-3">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Auth;
