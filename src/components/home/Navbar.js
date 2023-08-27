import React from "react";
import { Link } from "react-router-dom";

import threeline from "../../images/threelines.png";
import utlogo from "../../images/yt_logo.png";
import createlogo from "../../images/utube_create_icon.png";
import bell from "../../images/ut_ball_icon.png";
import logo_search from "../../images/logo_search.png";
import Store from "../../redux/Store";
import { toggleSideBar } from "../../redux/Slice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const handletoggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="grid grid-flow-col  h-16">
      <div className="col-span-2 mx-4 my-0 flex ">
        <img
          className="self-center h-6 cursor-pointer"
          src={threeline}
          alt="ImgNotFound"
          onClick={handletoggle}
        />
        <Link to="/">
          <img
            className="self-center h-14 px-4 cursor-pointer"
            src={utlogo}
            alt="ImgNotFound"
          />
        </Link>
      </div>
      <div className="col-span-8  flex pl-32">
        <input
          className="h-10 w-2/3 rounded-l-full self-center shadow-inner border border-black-600  px-4"
          type="text"
          placeholder="Search"
        />
        <button className="h-10 w-14 rounded-r-full self-center border border-black-600 bg-slate-50">
          <img className="h-6 mx-auto" src={logo_search} alt="" />
        </button>
      </div>
      <div className="col-span-2 justify-self-end px-8 flex h-16 ">
        <img
          className="self-center  h-10 px-5"
          src={createlogo}
          alt="ImgNotFound"
        />
        <img className="self-center  h-6 px-5" src={bell} alt="ImgNotFound" />
        <span className="self-center  h-8 w-8  rounded-full bg-blue-600 text-white text-center  font-bold text-xl">
          A
        </span>
      </div>
    </div>
  );
};

export default Navbar;
