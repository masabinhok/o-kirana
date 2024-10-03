import { login } from "../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth, role, setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, secretKey, navigate, setIsAuth);
  };
  return (
    <div className="container flex-col flex items-center justify-center gap-4 p-3">
      <div className="container">
        <form
          className="flex flex-col text-zinc-900 items-center  gap-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">
            <input
              className="border-b-1 border-zinc-700 border  px-3 py-2 rounded-md max w-[400px] max-md:w-[300px] shadow-zinc-700 
              outline-none shadow-inner"
              type="email"
              name="email"
              required
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
          {role === "SELLER" || role === "ADMIN" ? (
            <label htmlFor="secretKey">
              <input
                className="border-b-1 border-zinc-700 border  px-3 py-2 rounded-md max w-[400px] max-md:w-[300px]  shadow-zinc-700 
                outline-none shadow-inner"
                type="password"
                name="secretKey"
                placeholder="Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </label>
          ) : null}

          <button
            className="text-white shadow-inner shadow-zinc-700 w-[200px] rounded-xl p-3 border-b-1 border-zinc-700 border bg-zinc-900"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="container flex items-center flex-col mt-4">
        <p>
          New to <span className="text-green-500">oKIRANA?</span>
        </p>
        <button
          onClick={() => setAuth("SIGNUP")}
          className="underline cursor-pointer"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
