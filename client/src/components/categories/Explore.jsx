import React from "react";

const Explore = () => {
  return (
    <section className="w-full p-4 h-[700px] grid grid-cols-2 gap-4   bg-red-500  ">
      <div className="items-center bg-green-500">1</div>
      <div className="items-center grid grid-rows-2 gap-4">
        <div className="items-center bg-blue-500 h-full">2</div>
        <div className="items-center h-full bg-yellow-400 ">3</div>
      </div>
    </section>
  );
};

export default Explore;
