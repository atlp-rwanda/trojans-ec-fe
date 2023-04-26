import React from "react";
import { Skeleton } from "@mui/material";
import LoadingImages from "@components/skeleton/LoadingImages";
export const LoadingSingleMain = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center sm:flex-row sm:justify-center">
      <div className="sm:mr-10">
        <LoadingImages />
      </div>
      <div className="my-8 flex flex-col justify-between">
        <Skeleton variant="text" sx={{ fontSize: "2.25rem" }} />
        <div className="my-6">
          <p className="text-lg">
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.125rem" }}
              width={180}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.125rem" }}
              width={150}
            />
          </p>
          <p className="text-lg"></p>
          <p className="text-lg">
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.125rem" }}
              width={200}
            />
          </p>
        </div>
        <div className="w-60 h-10 sm:w-72 sm:h-12 overflow-hidden">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={288}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};
