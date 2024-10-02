import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex items-center flex-col justify-center bg-zinc-900 text-white text-7xl font-bold">
      oKIRANA
      <button className="text-lg text-red-700 bg-red-50 px-5 py-3 rounded-xl mt-4">
        <Link to="/auth">Get Started</Link>
      </button>
    </div>
  );
};

export default Homepage;
