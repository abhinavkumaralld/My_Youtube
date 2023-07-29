import React, { useEffect, useState } from "react";
import Temp from "./Temp";
import SuggestionCard from "./SuggestionCard";
import SuggestionBar from "./SuggestionBar";
const SurveSuggestion = () => {
  const [suggvideos, setsuggvideos] = useState([]);
  useEffect(() => {
    setsuggvideos(Temp.items);
  });
  return (
    <div className="flex m-4 flex-col">
      <div className="mb-3">
        <SuggestionBar />
      </div>
      {suggvideos.map((val, ind) => {
        return <SuggestionCard key={val.id} videoCard={val}></SuggestionCard>;
      })}
    </div>
  );
};

export default SurveSuggestion;
