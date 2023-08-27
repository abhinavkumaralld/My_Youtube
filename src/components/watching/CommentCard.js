import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex my-4">
      <img
        className="h-10 w-10 rounded-full"
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="IMgNotFound"
      />
      <div className="px-2 w-[850px]">
        <div className="font-bold">
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </div>
        <div>{comment.snippet.topLevelComment.snippet.textOriginal}</div>
      </div>
    </div>
  );
};

export default CommentCard;
