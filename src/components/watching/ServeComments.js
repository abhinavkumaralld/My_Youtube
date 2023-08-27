import React from "react";
import CommentCard from "./CommentCard";
import TempComments from "./TempComments";
const ServeComments = () => {
  return (
    <>
      <div className="my-8">Comments</div>
      <div>
        {TempComments.items.map((val, ind) => {
          return <CommentCard comment={val} key={val.id} />;
        })}
      </div>
    </>
  );
};

export default ServeComments;
