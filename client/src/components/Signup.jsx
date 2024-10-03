import { signup } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, fullName, navigate, setAuth);
  };
  return (
    <div className="container flex-col flex items-center justify-center gap-4 p-3">
      <div className="container">
        <form
          className="flex flex-col text-zinc-900 items-center  gap-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="fullName">
            <input
              className="border-b-1 border-zinc-700 border  px-3 py-2 rounded-md max w-[400px] max-md:w-[300px]  shadow-zinc-700 
              outline-none shadow-inner"
              type="text"
              required
              name="fullName"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <input
              className="border-b-1 border-zinc-700 border  px-3 py-2 rounded-md max w-[400px] max-md:w-[300px] shadow-zinc-700 
              outline-none shadow-inner"
              type="email"
              required
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              className="border-b-1 border-zinc-700 border  px-3 py-2 rounded-md max w-[400px] max-md:w-[300px]  shadow-zinc-700 
              outline-none shadow-inner"
              type="password"
              name="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="text-white shadow-inner shadow-zinc-700 w-[200px] rounded-xl p-3 border-b-1 border-zinc-700 border bg-zinc-900"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="container flex items-center flex-col mt-4">
        <p>
          Already have an <span className="text-green-500">account?</span>
        </p>
        <button
          onClick={() => setAuth("AUTH")}
          className="underline cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
