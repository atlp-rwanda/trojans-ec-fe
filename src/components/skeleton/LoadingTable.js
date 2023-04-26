import React from "react";
import { Skeleton } from "@mui/material";

export const LoadingTable = () => {
  let rows = [];
  const count = 7;
  for (let i = 0; i < count; i++) {
    rows.push(
      <tr
        key={i}
        className={`transition-all ease-in duration-75 hover:cursor-pointer hover:bg-gray-200`}
      >
        <td className="p-3 text-base tracking-wide text-center flex ml-3">
          <Skeleton
            variant="circular"
            animation="wave"
            style={{ height: "24px", width: "24px" }}
          />
          <span>
            {" "}
            <Skeleton
              animation="wave"
              width={100}
              sx={{ fontSize: "0.875rem" }}
            />
          </span>
        </td>
        <td className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
        <td className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
        <td className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
          {" "}
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
        <td className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
          {" "}
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
        <td className="p-3 text-base tracking-wide text-center">
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
        <td className="p-3 text-base tracking-wide text-center flex justify-evenly">
          <Skeleton
            animation="wave"
            width={100}
            sx={{ fontSize: "0.875rem" }}
          />
        </td>
      </tr>
    );
  }
  return (
    <div data-testid="skel-table">
      {" "}
      <Skeleton animation="wave" width={200} sx={{ fontSize: "1.5rem" }} />
      <table className="w-full table overflow-x-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-base tracking-wide text-center">
              {" "}
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className="hidden sm:table-cell p-3 text-base tracking-wide text-center">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className=" p-3 text-base tracking-wide text-center">
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
            <th className="p-3 text-base tracking-wide text-center">
              {" "}
              <Skeleton
                animation="wave"
                width={100}
                sx={{ fontSize: "0.875rem" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
