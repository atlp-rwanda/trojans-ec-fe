import React from "react";
import { Skeleton } from "@mui/material";

export const LoadingTable = () => {
  let rows = [];
  const count = 7;
  for (let i = 0; i < count; i++) {
    rows.push(
      <div
        key={i}
        className={`w-full overflow-hidden transition-all ease-in duration-75 hover:cursor-pointer hover:bg-gray-200`}
      >
        <div className="mb-2">
          <Skeleton
            animation="wave"
            height={40}
            variant="rectangular"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  }
  return (
    <div
      data-testid="skel-table"
      className="products-table box-border w-[100%] min-h-[80vh] bg-white px-8 py-4 rounded-2xl relative lg:w-full"
    >
      {" "}
      <Skeleton
        animation="wave"
        width={200}
        height={40}
        sx={{ fontSize: "1.5rem", lineHeight: "2rem" }}
      />
      <div className="mb-4">
        <Skeleton
          animation="wave"
          height={45}
          variant="rectangular"
          style={{ width: "100%" }}
        />
      </div>
      <div>{rows}</div>
    </div>
  );
};
