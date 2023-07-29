import React, { useEffect, useState } from "react";

const SuggestionBar = () => {
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
  const [index, setindex] = useState(0);
  const [prevdisable, setprevdisabe] = useState(true);
  const [nextdisable, setnextdisabe] = useState(false);
  const disableprev = () => {
    if (index === 0) setprevdisabe(true);
    else setprevdisabe(false);
  };
  const disablenext = () => {
    if (values.length - index <= 4) setnextdisabe(true);
    else setnextdisabe(false);
  };
  useEffect(() => {
    disablenext();
    disableprev();
  }, [index]);
  const handleprev = () => {
    if (index - 4 >= 0) setindex(index - 4);
  };
  const handlenext = () => {
    if (index + 4 < values.length) setindex(index + 4);
  };
  return (
    <div className="flex ">
      <div className="self-center text-2xl px-0" onClick={handleprev}>
        {prevdisable ? "" : <p>&lt;</p>}
      </div>
      {values.slice(index, index + 4).map((val, ind) => {
        return (
          <div key={ind} className="bg-gray-200  rounded-md  mx-2 h-7 px-2">
            {val}
          </div>
        );
      })}

      <div className="text-2xl fixed right-16" onClick={handlenext}>
        {nextdisable ? "" : <p>&gt;</p>}
      </div>
    </div>
  );
};

export default SuggestionBar;
