import React from "react";
import { Skeleton } from "@mui/material";
import LoadingMainImages from "./LoadingMainImages";
export const LoadingSingleMain = () => {
  return (
    <div
      data-testid="skel-singleMain"
      className="flex justify-center flex-col items-center sm:flex-row lg:justify-start lg:ml-[15vw]"
    >
      <div className="sm:mr-10">
        <LoadingMainImages />
      </div>
      <div className="my-8 relative flex flex-col justify-start h-full">
        <div className="w-full flex justify-end items-center mb-5">
          <Skeleton
            variant="circular"
            animation="wave"
            width={80}
            height={80}
          />
        </div>
        <h1 className="font-[500] text-4xl text-primary lg:mb-5">
          <Skeleton animation="wave" width={200} sx={{ fontSize: "2rem" }} />
        </h1>
        <p className="text-lg">
          <Skeleton animation="wave" width={150} sx={{ fontSize: "1.5rem" }} />
        </p>
        <div className="my-6">
          <p className="text-lg">
            <Skeleton
              animation="wave"
              width={150}
              sx={{ fontSize: "1.5rem" }}
            />
          </p>
          <p className="text-lg">
            <Skeleton
              animation="wave"
              width={150}
              sx={{ fontSize: "1.5rem" }}
            />
          </p>
        </div>
        <button>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={190}
            height={30}
          />
        </button>
        <button className="mt-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={190}
            height={30}
          />
        </button>
      </div>
    </div>
  );
};
