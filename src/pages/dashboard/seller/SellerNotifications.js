import React, { useState } from "react";
import SellerHome from "../../../components/dashboard/SellerHome";
import SellerMain from "./SellerMain";
import AllNotification from "../../../components/notification/allNotification";

const SellerNotifications = () => {
  return (
    <div className="">
      <SellerMain element={ <AllNotification /> } />
    </div>
  );
};

export default SellerNotifications;
