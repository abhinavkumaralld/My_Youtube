import React, { useState, useEffect } from "react";
// import MY_UT_API from "../../utils/Constants";
import data from "../tempdata/Temp";
import VideoCard from "./VideoCard";
import BodyBar from "./BodyBar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Store from "../../redux/Store";
import Slice from "../../redux/Slice";
import dotenv from "dotenv";
dotenv.config();

const ServeVideos = () => {
  const [videos, setVideos] = useState([]);
  const isSideBar = useSelector((Store) => Store.Slice.isSideBar);
  const addvideos = async () => {
    //UNCOMMENT BELOW PART FOR THE REAL TIME UT_API VIDEOS
    // const fetchedvideos = await fetch(
    //   process.env.MY_URL + process.env.MY_API_KEY
    // );
    // const parsed = await fetchedvideos.json();
    // setVideos(parsed.items);
    setVideos(data.items);
  };
  useEffect(() => {
    addvideos();
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
