import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { logo } from "../assets";
import { CiSearch } from "react-icons/ci";
import items from "../constants/items";
import Vegetables from "../components/categories/Vegetables";
import Fruits from "../components/categories/Fruits";
import Dairy from "../components/categories/Dairy";
import Meat from "../components/categories/Meat";
import Beverages from "../components/categories/Beverages";
import Bakery from "../components/categories/Bakery";
import Explore from "../components/categories/Explore";

const Dashboard = ({ setIsAuth }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [category, setCategory] = useState("explore");

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  const renderCategoryWithState = () => {
    switch (category) {
      case "vegetables":
        return <Vegetables />;
      case "fruits":
        return <Fruits />;
      case "dairy":
        return <Dairy />;
      case "meat":
        return <Meat />;
      case "beverages":
        return <Beverages />;
      case "bakery":
        return <Bakery />;
      case "explore":
        return <Explore />;
      default:
        return <Explore />;
    }
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
    <div className="flex flex-col items-center">
      <nav className="w-full flex flex-col h-[200px] bg-zinc-900 py-4 px-10 gap-2 max-w-full text-white items-center">
        {/* Top Navbar */}
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-[100px]" src={logo} alt="Logo" />
          </div>
          {/* Search Bar */}
          <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-lg w-[500px]">
            <input
              className="w-full bg-transparent outline-none placeholder-gray-400 text-white"
              type="search"
              placeholder="Search..."
            />
            <button className="text-gray-400 hover:text-white">
              <CiSearch size={24} />
            </button>
          </div>
          {/* User Profile & Cart */}
          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold">Bag</div>
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={`/${user.profileImageURL}`}
                alt="User"
              />
              <p className="font-medium flex flex-col">
                {user.fullName}
                <span className="text-[12px] text-yellow-400">{user.role}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex w-full justify-center rounded-md shadow-inner shadow-zinc-700 overflow-hidden bg-zinc-800 py-3 mt-2">
          <div
            onClick={() => setCategory("explore")}
            className={`px-4 py-2  hover:bg-zinc-700 cursor-pointer transition-all rounded-md mx-2 ${
              category === "explore" && "text-red-700 font-bold"
            }`}
          >
            Explore
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setCategory(item.toLowerCase())}
              className={`px-4 py-2  hover:bg-zinc-700 cursor-pointer transition-all rounded-md mx-2 ${
                category === item.toLowerCase() && "text-red-700 font-bold"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </nav>
      <main className="w-full align-center items-center justify-center  flex flex-col max-w-[1320px] ">
        {renderCategoryWithState()}
      </main>
    </div>
  );
};

export default Dashboard;
