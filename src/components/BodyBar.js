import React, { useState, useEffect } from "react";

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
    "hii",
  ];
  const [index, setindex] = useState(0);
  const [prevdisable, setprevdisabe] = useState(true);
  const [nextdisable, setnextdisabe] = useState(false);
  const disableprev = () => {
    if (index === 0) setprevdisabe(true);
    else setprevdisabe(false);
  };
  const disablenext = () => {
    if (values.length - index <= 9) setnextdisabe(true);
    else setnextdisabe(false);
  };
  useEffect(() => {
    disablenext();
    disableprev();
  }, [index]);
  const handleprev = () => {
    if (index - 9 >= 0) setindex(index - 9);
  };
  const handlenext = () => {
    if (index + 9 < values.length) setindex(index + 9);
  };
  return (
    <div className="flex mx-16 mt-2 mb-6 ">
      <div className="px-5" onClick={handleprev}>
        {prevdisable ? (
          ""
        ) : (
          <p className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200">
            &lt;
          </p>
        )}
      </div>
      <div className="self-center flex ">
        {values.slice(index, index + 9).map((val, ind) => {
          return (
            <div key={ind} className="bg-gray-100  rounded-md  mx-3 h-7 px-2">
              {val}
            </div>
          );
        })}
      </div>
      <div className="fixed right-24  " onClick={handlenext}>
        {nextdisable ? null : (
          <p className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200">
            &gt;
          </p>
        )}
      </div>
    </div>
  );
};

export default BodyBar;
