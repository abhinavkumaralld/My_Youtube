import React, { useEffect, useState } from "react";
import Temp from "./Temp";
import SuggestionCard from "./SuggestionCard";
const SurveSuggestion = () => {
  const [suggvideos, setsuggvideos] = useState([]);
  useEffect(() => {
    setsuggvideos(Temp.items);
  });
  return (
    <div className="flex m-4 flex-col">
      {suggvideos.map((val, ind) => {
        return <SuggestionCard key={val.id} videoCard={val}></SuggestionCard>;
      })}
    </div>
  );
};

export default SurveSuggestion;
