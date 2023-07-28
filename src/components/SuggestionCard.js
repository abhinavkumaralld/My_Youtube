import React from "react";
import { Link, useOutletContext } from "react-router-dom";
const SuggestionCard = ({ videoCard }) => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();
  const handleWatch = () => {
    setwatchinginfo(videoCard);
  };

  return (
    <div className="px-5 flex ">
      <Link to={"watch/" + videoCard.id} onClick={handleWatch}>
        <img
          className="rounded-sm"
          src={videoCard?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </Link>
      <div className="font-bold w-80 ">
        {videoCard?.snippet?.title.slice(0, 40)}
      </div>
      <div className="text-gray-600">{videoCard?.snippet?.channelTitle}</div>
      <div className="flex">
        <div>{videoCard?.statistics?.viewCount} views .</div>
        <div className="px-2">{videoCard?.snippet?.publishedAt}</div>
      </div>
    </div>
  );
};

export default SuggestionCard;
