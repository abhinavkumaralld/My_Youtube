import React from "react";
import homelogo from "../../images/home_logo.png";
import shorts_logo from "../../images/shorts_logo.png";
import subsc_logo from "../../images/subs.png";
import hist_logo from "../../images/history.png";
import urvid_logo from "../../images/ur_video.png";
import wchltr_logo from "../../images/watchltr.png";
import liked_logo from "../../images/like.png";
import hist_logo from "../../images/history.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div>
        <Link to="/" className="flex mx-5 my-4  w-40">
          <img className="h-6 mx-5 my-2" src={homelogo} alt="" />
          <div className="self-center font-bold">Home</div>
        </Link>
        <Link to="/" className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={shorts_logo} alt="" />
          <div className="self-center font-bold">Shorts</div>
        </Link>
        <Link to="/" className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={subsc_logo} alt="" />
          <div className="self-center font-bold">Subscriptions</div>
        </Link>
      </div>
      <hr className="my-2 mx-5 w-40" />
      <div>
        <div className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={hist_logo} alt="" />
          <div className="self-center font-bold">History</div>
        </div>
        <div className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={urvid_logo} alt="" />
          <div className="self-center font-bold">Your videos</div>
        </div>
        <div className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={wchltr_logo} alt="" />
          <div className="self-center font-bold">Watch later</div>
        </div>
        <div className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={liked_logo} alt="" />
          <div className="self-center font-bold">liked videos</div>
        </div>
        <div className="flex mx-5  w-40">
          <img className="h-6 mx-5 my-2" src={shorts_logo} alt="" />
          <div className="self-center font-bold">Show More</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
