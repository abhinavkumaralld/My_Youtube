import React, { useContext, useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Mycontext from "../contexts/Mycontext";
import ServeSuggestion from "../components/ServeSuggestion";
const Watching = () => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();
  // console.log("watchinginfo");
  console.log(watchinginfo);
  if (watchinginfo.snippet === undefined) return <h1>No watchinginfo yet</h1>;
  const [isfull, setisfull] = useState(false);
  const [isFullDescrp, setisFullDescrp] = useState("");
  const handleisfull = () => {
    setisfull(!isfull);
  };
  useEffect(() => {
    if (isfull) setisFullDescrp("");
    else {
      setisFullDescrp("h-12 text-clip overflow-hidden");
      window.scrollTo(620, 620);
    }
  }, [isfull]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="flex ">
      <div className="my-6  ml-20 mr-5 ">
        <iframe
          width="910"
          height="540"
          src={"https://www.youtube.com/embed/" + useParams().id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="px-5 mt-3">
          <div className="font-bold text-lg">
            {video?.snippet?.title.slice(0, 80)}
          </div>
          <div className="text-gray-600">{video?.snippet?.channelTitle}</div>
          <div className="flex">
            <div>{video?.statistics?.viewCount} views .</div>
            <div className="px-2">{video?.snippet?.publishedAt}</div>
          </div>
        </div>
        <div className="w-[910px] border border-black rounded-lg bg-gray-200">
          <div className={`mx-5 w-[910px] ${isFullDescrp}`}>{newText}</div>
          <button className="mx-5 font-bold" onClick={handleisfull}>
            {isfull ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <div>
        <ServeSuggestion />
      </div>
    </div>
  );
};

export default Watching;
