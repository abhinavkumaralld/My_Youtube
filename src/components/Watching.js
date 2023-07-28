import React, { useContext, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Mycontext from "../contexts/Mycontext";
const Watching = () => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();
  const [isfull, setisfull] = useState(true);
  const [isFullDescrp, setisFullDescrp] = useState("");
  const handleisfull = () => {
    setisfull(!isfull);
    if (isfull) setisFullDescrp("");
    else setisFullDescrp("h-12 text-clip overflow-hidden");
    console.log(isfull);
  };

  const video = watchinginfo;
  let Text = watchinginfo.snippet.description.split("\n");
  let newText = Text.map((val, ind) => {
    const pattern1 = new RegExp("HTTPS:");
    const pattern2 = new RegExp("https:");
    const pattern3 = new RegExp("#");
    if (val === "") return <br key={ind}></br>;
    else if (pattern1.test(val) || pattern2.test(val) || pattern3.test(val))
      return (
        <a key={ind} href="#" className="text-blue-700">
          {val}
        </a>
      );
    else return <p key={ind}>{val}</p>;
  });
  console.log(newText);
  return (
    <div className="my-6 mx-20">
      <iframe
        width="960"
        height="540"
        src={"https://www.youtube.com/embed/" + useParams().id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="px-5 ">
        <div className="font-bold w-80 ">
          {video?.snippet?.title.slice(0, 40)}
        </div>
        <div className="text-gray-600">{video?.snippet?.channelTitle}</div>
        <div className="flex">
          <div>{video?.statistics?.viewCount} views .</div>
          <div className="px-2">{video?.snippet?.publishedAt}</div>
        </div>
      </div>
      <div className="w-[960px] border border-black rounded-lg bg-gray-200">
        <div className={`mx-5 w-[900px] ${isFullDescrp}`}>{newText}</div>
        <button className="mx-5 font-bold" onClick={handleisfull}>
          {isfull ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default Watching;