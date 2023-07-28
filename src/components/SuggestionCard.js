import React from "react";
import { Link, useOutletContext } from "react-router-dom";
const SuggestionCard = ({ videoCard }) => {
  //   const [watchinginfo, setwatchinginfo] = useOutletContext();
  //   const handleWatch = () => {
  //     setwatchinginfo(videoCard);
  //   };

  return (
    <div className="px-2 flex mt-2  ">
      <Link /*to={"watch/" + videoCard.id} onClick={handleWatch}*/>
        <img
          className="rounded-lg w-44 "
          src={videoCard?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </Link>
      <div className="flex flex-col mx-2 w-44 text-clip overflow-hidden">
        <div className="font-bold w-80 text-sm">
          {videoCard?.snippet?.title.slice(0, 30)}
        </div>
        <div className="text-gray-600 text-sm">
          {videoCard?.snippet?.channelTitle}
        </div>
        <div className="flex">
          <div>{videoCard?.statistics?.viewCount} views .</div>
          <div className="px-2 text-sm">{videoCard?.snippet?.publishedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
