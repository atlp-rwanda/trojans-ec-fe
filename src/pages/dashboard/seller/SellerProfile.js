import React, { useState } from "react";
import ProfileUpdate from "../../profileUpdate";
import SellerMain from "./SellerMain";

const SellerProfile = () => {
  return (
    <div className="">
      <SellerMain element={<ProfileUpdate />} />
    </div>
  );
};

export default SellerProfile;
