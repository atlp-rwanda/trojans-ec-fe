import React from "react";
import SellerOrderCard from "./SellerOrderCard";
const SellerOrderView = () => {
  return (
    <div className="w-full lg:w-[100%] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <SellerOrderCard />
      <SellerOrderCard />
      <SellerOrderCard />
      <SellerOrderCard />
    </div>
  );
};

export default SellerOrderView;
