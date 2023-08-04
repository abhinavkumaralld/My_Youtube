import React from "react";
import { Link, useOutletContext } from "react-router-dom";
const VideoCard = ({ video }) => {
  // const [watchinginfo, setwatchinginfo] = useOutletContext();
  const handleWatch = () => {
    // setwatchinginfo(video);
  };

  return (
    <div className="px-5 ">
      <Link to={"watch/" + video.id} onClick={handleWatch}>
        <img
          className="rounded-sm"
          src={video?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </Link>
      <div className="font-bold w-80 ">
        {video?.snippet?.title.slice(0, 40)}
      </div>
      <div className="text-gray-600">{video?.snippet?.channelTitle}</div>
      <div className="flex">
        <div>{video?.statistics?.viewCount} views .</div>
        <div className="px-2">{video?.snippet?.publishedAt}</div>
      </div>
    </div>
  );
};

export default VideoCard;
