import React from "react";

function Coins({ name, price, symbol }) {
  const roundPrice = Math.round(price * 100) / 100;
  return (
    <div className="flex justify-center h-[160px]">
      <div className="w-[250px] p-5 h-full bg-zinc-700 mb-3 rounded-md">
        <div className="flex flex-row text-3xl justify-between ">
          <h2>{name}</h2>
        </div>
        <div className=" w-full h-3/5 flex items-center text-2xl  text-green-500">
          <h2>Price : {roundPrice}$</h2>
        </div>
      </div>
    </div>
  );
}

export default Coins;
