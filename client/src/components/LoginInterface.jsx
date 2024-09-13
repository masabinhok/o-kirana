import React from "react";

const LoginInterface = ({ setAuth }) => {
  return (
    <div className="container flex-col flex items-center justify-center gap-4 p-3">
      {" "}
      <button
        onClick={() => setAuth("ADMIN")}
        className="bg-zinc-900 border-b-1 border-zinc-700 border w-full max-w-[300px] p-3 rounded-md shadow-zinc-700 shadow-inner"
      >
        Login as Admin
      </button>
      <button
        onClick={() => setAuth("SELLER")}
        className="bg-zinc-900 border-b-1 border-zinc-700 border w-full max-w-[300px] p-3 rounded-md shadow-zinc-700 shadow-inner"
      >
        Login as Seller
      </button>
      <button
        onClick={() => setAuth("CUSTOMER")}
        className="bg-zinc-900 border-b-1 border-zinc-700 border w-full max-w-[300px] p-3 rounded-md shadow-zinc-700 shadow-inner"
      >
        Login as Customer
      </button>
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

export default LoginInterface;
