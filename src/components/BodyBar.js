import React from "react";

const BodyBar = () => {
  const values = [
    "All",
    "Javascript",
    "Website",
    "Data Structures",
    "Computers",
    "Live",
    "Statistic",
    "Class",
    "Watched",
    "New to you",
  ];
  return (
    <div className="flex">
      {values.map((val, ind) => {
        return (
          <div className="bg-gray-200  rounded-md  mx-2 h-7 px-2">{val}</div>
        );
      })}
    </div>
  );
};

export default BodyBar;
