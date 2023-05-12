import React from "react";
import { Skeleton } from "@mui/material";
const LoadingMainImages = () => {
  return (
    <div className="w-[280px] lg:w-[340px] h-[450px]">
      <div className="w-full h-[75%]">
        <Skeleton
          variant="rectangular"
          animation="wave"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="w-full h-[25%] flex justify-between mt-1">
        <div className="w-[25%] h-full p-[2px] hover:border hover:border-black">
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[25%] h-full p-[2px] hover:border hover:border-black">
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[25%] h-full p-[2px] hover:border hover:border-black">
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-[25%] h-full p-[2px] hover:border hover:border-black">
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingMainImages;
