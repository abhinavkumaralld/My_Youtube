import React, { useState, useEffect } from "react";
import MY_UT_API from "../utils/Constants";
import data from "../components/Temp";
import VideoCard from "./VideoCard";
import BodyBar from "./BodyBar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Store from "../redux/Store";
import Slice from "../redux/Slice";
const ServeVideos = () => {
  const [videos, setVideos] = useState([]);
  const isSideBar = useSelector((Store) => Store.Slice.isSideBar);
  useEffect(() => {
    setVideos(data.items);
  }, []);
  return (
    <div className="flex">
      <div>{isSideBar && <Sidebar />}</div>
      <div>
        <BodyBar />
        <div className="flex m-4 flex-wrap">
          {videos.map((val, ind) => {
            return <VideoCard key={val.id} video={val}></VideoCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServeVideos;
