import React from "react";
import { Skeleton } from "@mui/material";
const LoadingImages = () => {
  return (
    <div className="p-5 w-80 flex flex-col justify-between items-center sm:w-1/2 sm:mx-auto md:justify-center lg:w-full">
      <div className="w-64 image-bg bg-white h-[25vh] flex justify-center items-center overflow-hidden p-5 rounded-lg">
        <div className="w-56 md:w-72 p-5 overflow-hidden flex justify-center align-center">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={224}
            height={100}
          />
        </div>
      </div>
      <div className="w-72 flex justify-center items-center">
        <div className="flex justify-center items-center sm:w-24 w-16 h-24 m-1 bg-white overflow-hidden rounded-lg">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={96}
            height={80}
          />
        </div>
        <div className="flex justify-center items-center sm:w-24 w-16 h-24 m-1 bg-white overflow-hidden rounded-lg">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={96}
            height={80}
          />
        </div>
        <div className="flex justify-center items-center sm:w-24 w-16 h-24 m-1 bg-white overflow-hidden rounded-lg">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={96}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingImages;
