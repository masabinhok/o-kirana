import React from "react";

const Button = ({ buttonName }) => {
  return (
    <button
      className="text-white shadow-inner shadow-zinc-700 w-[200px] rounded-xl p-3 border-b-1 border-zinc-700 border bg-zinc-900"
      type="submit"
    >
      {buttonName}
    </button>
  );
};

export default Button;
