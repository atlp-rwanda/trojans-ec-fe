import React from "react";
import { Skeleton } from "@mui/material";
/* istanbul ignore next */
export const LoadingWishlist= ({ count }) => {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <div className="m-2 lg:w-full flex flex-col justify-center items-center relative">
        <div className="flex justify-center items-center w-full">
          <div className="mr-2 mb-7 p-5 flex justify-around items-center shadow-sm border-2 rounded-xl w-[90%]">
            <div>
              <Skeleton
                variant="rectangular"
                animation="wave"
                style={{ height: "40px", width: "96px", borderRadius: "5px" }}
              />
            </div>
            <div className="m-3 w-[110px] sm:w-1/2 flex flex-col justify-between items-center ">
              <h1 className="text-md font-bold mb-3 lg:text-2xl">
                {" "}
                <Skeleton
                  width={100}
                  animation="wave"
                  sx={{ fontSize: "1.5rem" }}
                />
              </h1>
              <div className="text-sm font-light">
                <p>
                  <Skeleton
                    width={100}
                    animation="wave"
                    sx={{ fontSize: "14px" }}
                  />
                </p>
                <p>
                  {" "}
                  <Skeleton
                    width={50}
                    animation="wave"
                    sx={{ fontSize: "14px" }}
                  />
                </p>
              </div>
            </div>
            <div className="">
            <div className="flex flex-col justify-center items-center">
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={20}
                  animation="wave"
                />
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{cards}</>;
};