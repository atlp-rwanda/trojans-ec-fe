import React from "react";
import BuyerMain from "./BuyerMain";
import OrderView from "../../../components/orders/OrderView";
const BuyerOrders = () => {
  return (
    <div>
      <BuyerMain element={<OrderView />} />
    </div>
  );
};

export default BuyerOrders;
