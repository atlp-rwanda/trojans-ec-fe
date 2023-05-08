import React from "react";
import LoadingImages from "./LoadingImages";
import { Skeleton } from "@mui/material";
const LoadingCard = () => {
  return (
    <div
      data-testid="skel-card"
      className="product-card p-5 bg-whiteColor mx-auto rounded-md shadow flex flex-col justify-center items-center lg:flex-row lg:items-center lg:max-h-[55vh]"
    >
      <div className="w-1/4 flex justify-center items-start sm:w-1/2 sm:mx-auto">
        <LoadingImages />
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <div className=" flex justify-between">
            <h1 className="sm:text-3xl text-2xl mb-3 font-semibold">
              <Skeleton
                width={120}
                animation="wave"
                sx={{ fontSize: "28px", fontWeight: "700", lineHeight: "36px" }}
              />
            </h1>
            <span className="font-regular text-white text-center px-3 py-1 rounded-xl  max-w-44 leading-5 h-8 mx-10">
              <Skeleton
                width={100}
                height={30}
                animation="wave"
                variant="rectangular"
              />
            </span>
          </div>
          <h2 className="font-regular">
            {/* Category:{" "} */}
            <span className="text-primary">
              <Skeleton
                width={110}
                animation="wave"
                sx={{ fontSize: "24x", lineHeight: "32px" }}
              />
            </span>
          </h2>
          <div className="font-regular grid grid-cols-2 justify-around">
            <h2 className="">
              {/* Quantity:{" "} */}
              <span className="text-primary">
                <Skeleton
                  width={110}
                  animation="wave"
                  sx={{ fontSize: "24px", lineHeight: "32px" }}
                />
              </span>
            </h2>
            <h2 className="">
              {/* Availability */}
              <span className="text-primary">
                <Skeleton
                  width={120}
                  animation="wave"
                  sx={{ fontSize: "24px", lineHeight: "32px" }}
                />
              </span>
            </h2>
            <h2 className="">
              {/* price */}
              <span className="text-primary">
                {" "}
                <Skeleton
                  width={100}
                  animation="wave"
                  sx={{ fontSize: "24px", lineHeight: "32px" }}
                />
              </span>
            </h2>
            <h2 className="">
              {/* Bonus:{" "} */}
              <span className="text-primary">
                {" "}
                <Skeleton
                  width={100}
                  animation="wave"
                  sx={{ fontSize: "24px", lineHeight: "32px" }}
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="my-4">
          <Skeleton
            variant={"rectangular"}
            animation="wave"
            style={{ width: "100%" }}
            height={70}
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            {" "}
            <Skeleton
              width={120}
              animation="wave"
              sx={{ fontSize: "28px", fontWeight: "700", lineHeight: "36px" }}
            />
          </h1>
          <Skeleton animation="wave" width={120} sx={{ fontSize: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
