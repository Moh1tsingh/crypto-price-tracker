import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "../src/components/Coins";

function App() {
  const [listofCoins, setlistofCoins] = useState([]);
  const [searchWord, setsearchWord] = useState("");
  useEffect(() => {
    Axios.get("https://api.coincap.io/v2/assets?limit=50").then((response) => {
      setlistofCoins(response.data.data);
    });
  }, []);

  const filteredCoins = listofCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className=" m-10">
      <h1 className="font-bold  text-5xl text-center mt-8">Crypto Prices</h1>
      <div className=" flex h-[100px] justify-center items-center">
        <input
          className=" rounded-md h-12 w-[500px] p-2  focus:outline-green-700 outline-3 outline-none"
          type="text"
          placeholder="Bitcoin..."
          value={searchWord}
          onChange={(e) => {
            setsearchWord(e.target.value);
          }}
        />
      </div>

      <div className="mt-8 font-bold   grid auto-rows-fr grid-cols-4 gap-5 grid-container">
        {Array.isArray(listofCoins) ? (
          filteredCoins.map((coin) => (
            <div key={coin.id}>
              <Coin
                name={coin.name}
                price={coin.priceUsd}
                symbol={coin.symbol}
              />
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
