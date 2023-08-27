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
    if (values.length - index <= 3) setnextdisabe(true);
    else setnextdisabe(false);
  };
  useEffect(() => {
    disablenext();
    disableprev();
  }, [index]);
  const handleprev = () => {
    if (index - 3 >= 0) setindex(index - 3);
  };
  const handlenext = () => {
    if (index + 3 < values.length) setindex(index + 3);
  };
  return (
    <div className="flex ">
      <div className="px-0" onClick={handleprev}>
        {prevdisable ? (
          ""
        ) : (
          <p className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200">
            &lt;
          </p>
        )}
      </div>
      <div className="self-center flex ">
        {values.slice(index, index + 3).map((val, ind) => {
          return (
            <div key={ind} className="bg-gray-100  rounded-md  mx-3 h-7 px-2">
              {val}
            </div>
          );
        })}
      </div>
      <div className="fixed right-20" onClick={handlenext}>
        {nextdisable ? null : (
          <p className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200">
            &gt;
          </p>
        )}
      </div>
    </div>
  );
};

export default SuggestionBar;
