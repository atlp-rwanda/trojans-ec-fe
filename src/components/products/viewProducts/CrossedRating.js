import StarRating from "./StarRating";
import React from "react";

const CrossedRating = ({ width }) => {
  return (
    <div className="relative">
      <StarRating rating={0} />
      <span
        className={`w-[90px] top-[13px] left-0 h-0.5 absolute bg-[#d6a445]`}
      ></span>
    </div>
  );
};

export default CrossedRating;
