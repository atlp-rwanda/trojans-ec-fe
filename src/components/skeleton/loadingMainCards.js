import { Skeleton } from "@mui/material";
import React from "react";

export const LoadingMainCards = ({ count }) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="m-4 bg-whiteColor border border-gray-200 rounded-xl shadow-lg w-[280px]">
        <div className=" relative w-full h-[65%] p-3">
          <Skeleton
            variant="rectangular"
            animation="wave"
            style={{ width: "256px", height: "180px" }}
          />
        </div>
        <div className="flex justify-between items-center px-4 pb-3">
          <div className=" flex flex-col justify-between h-[35%] w-full">
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="font-[500] text-xl leading-2">
                  <Skeleton
                    animation="wave"
                    width={100}
                    sx={{ fontSize: "24px", fontWeight: "bold" }}
                  />
                </p>
                <p className="font-[400] text-md text-gray-600 mt-[-4px]">
                  <Skeleton
                    animation="wave"
                    width={100}
                    sx={{ fontSize: "20px" }}
                  />
                </p>
              </div>
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "24px" }}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xl text-primary font-[600]">
                <Skeleton
                  animation="wave"
                  width={100}
                  sx={{ fontSize: "24px" }}
                />
              </p>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={100}
                style={{ borderRadius: "14px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
      {cards}
    </div>
  );
};
