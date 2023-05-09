import React from "react";
import { Skeleton } from "@mui/material";
/* istanbul ignore next */
export const LoadingStatistic= ({ count,testid }) => {
  let cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        <div className="mr-4">   <Skeleton
            width={50}
            height={50}
           /></div>
        <div>
          <h2 className="text-xl font-bold mb-2">   <Skeleton
            width={100}
           /></h2>
       
            <Skeleton
            width={100}
           />
   
        
        </div>
      </div>
    );
  }
  return <><div data-testid={testid} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{cards}</div></>;
};