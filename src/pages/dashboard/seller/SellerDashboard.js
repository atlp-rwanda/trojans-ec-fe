import React, { useState } from "react";
import SellerHome from "../../../components/dashboard/SellerHome";
import SellerStatisticPage from "../../statistic";
import SellerMain from "./SellerMain";


const SellerDashboard = () => {
  return (
    <div className="">
      <SellerMain element={<SellerStatisticPage />} />
    </div>
  );
};

export default SellerDashboard;
