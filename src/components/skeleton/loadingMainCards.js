import { Skeleton } from "@mui/material";
import React from "react";

export const LoadingMainCards = ({ count }) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div
        key={i}
        className="p-container shadow-sm m-5 py-5 px-3 flex justify-center border-2 rounded-3xl relative"
      >
        <div className="w-[200px] mx-auto flex flex-col justify-center hover:cursor-pointer">
          <div className="h-14 overflow-hidden p-1 bg-whiteColor rounded-xl flex justify-center items-center w-1/2 mx-auto">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={96}
              height={56}
            />
          </div>
          <div className="flex justify-between font-semibold text-sm mt-2">
            <Skeleton
              animation="wave"
              width={50}
              sx={{ fontSize: "0.875rem" }}
            />
            <Skeleton
              animation="wave"
              width={50}
              sx={{ fontSize: "0.875rem" }}
            />
          </div>
          <div className="my-1">
            <Skeleton
              animation="wave"
              width={50}
              sx={{ fontSize: "0.875rem" }}
            />
          </div>
          <div className="ml-1">
            <Skeleton
              animation="wave"
              width={80}
              sx={{ fontSize: "0.875rem" }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="m-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {cards}
    </div>
  );
};