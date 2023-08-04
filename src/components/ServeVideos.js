import React, { useState, useEffect } from "react";
import MY_UT_API from "../utils/Constants";
import data from "../components/Temp";
import VideoCard from "./VideoCard";
import BodyBar from "./BodyBar";

const ServeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(data.items);
  }, []);
  return (
    <div>
      <BodyBar />
      <div className="flex m-4 flex-wrap">
        {videos.map((val, ind) => {
          return <VideoCard key={val.id} video={val}></VideoCard>;
        })}
      </div>
    </div>
  );
};

export default ServeVideos;
