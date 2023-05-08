import React from "react";
import { Skeleton } from "@mui/material";
const LoadingNewCard = ({ count }) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="max-w-[100%] hover:scale-[1.02] hover:cursor-pointer h-96 rounded-lg transition-all duration-200 ease-linear border shadow-md bg-whiteColor border-purple-100 flex flex-col justify-between items-center">
        <div className="w-full p-2 hover:p-0 transition-all duration-200 ease-in bg-transparent h-[68%] flex justify-center overflow-hidden">
          {" "}
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"100%"}
            animation="wave"
          />
        </div>
        <div className="px-3 py-2 flex flex-col justify-between items-center w-full h-[32%]">
          <h1 className="font-[600] text-2xl text-dark">
            {" "}
            <Skeleton animation="wave" width={100} sx={{ fontSize: "24px" }} />
          </h1>
          <div className="flex justify-around items-center w-[90%]">
            <p className="font-[600] w-[75%]">
              <span className="font-light  text-gray-600">
                {" "}
                <Skeleton
                  animation="wave"
                  width={100}
                  sx={{ fontSize: "16px" }}
                />
              </span>{" "}
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "16px" }}
              />
            </p>
            <p className="w-[25%] flex justify-end italic text-sm">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "14px" }}
              />
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-3">
            <Skeleton
              variant="rectangular"
              width={100}
              height={20}
              animation="wave"
            />
            <span className="text-lg font-semibold">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "18px" }}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      data-testid="skel-newCard"
      className="w-full lg:w-[100%] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {cards}
    </div>
  );
};

export default LoadingNewCard;
