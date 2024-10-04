const Button = ({ buttonName }) => {
  return (
    <button
      className="text-white shadow-inner shadow-zinc-700 rounded-xl p-3  border-b-1 w-full border-zinc-700 border bg-zinc-900"
      type="submit"
    >
      {buttonName}
    </button>
  );
};

export default Button;
