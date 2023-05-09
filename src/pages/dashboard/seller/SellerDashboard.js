import React, { useState } from "react";
import SellerHome from "../../../components/dashboard/SellerHome";
import SellerMain from "./SellerMain";

const SellerDashboard = () => {
  return (
    <div className="">
      <SellerMain element={<SellerHome />} />
    </div>
  );
};

export default SellerDashboard;
