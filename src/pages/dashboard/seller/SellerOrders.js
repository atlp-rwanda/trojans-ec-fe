import React from "react";
import SellerOrderView from "../../../components/sellerOrders/SellerOrderView";
import SellerMain from "./SellerMain";
const SellerOrders = () => {
  return (
    <div>
      <SellerMain element={<SellerOrderView />} />
    </div>
  );
};

export default SellerOrders;
