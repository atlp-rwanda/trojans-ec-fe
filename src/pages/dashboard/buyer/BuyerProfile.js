import React from "react";
import ProfileUpdate from "../../profileUpdate";
import BuyerMain from "./BuyerMain";
const BuyerProfile = () => {
  return (
    <div>
      <BuyerMain element={<ProfileUpdate />} link={1} />
    </div>
  );
};

export default BuyerProfile;
