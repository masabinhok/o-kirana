import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = ({ setIsAuth }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/dashboard", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setUser(res.data.user);
      });
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center flex-col justify-center bg-zinc-900 text-white text-7xl font-bold">
      <h1 className="text-center">
        Welcome <span className="text-blue-500">{user.fullName}</span>
        <p className="text-lg font-normal">
          You are logged in as{" "}
          <span className="lowercase text-blue-500">{user.role}</span>
        </p>
      </h1>
      <button
        onClick={() => handleLogout()}
        className="text-lg bg-red-200 text-red-700 px-5 py-3 rounded-xl mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
