import React, { useEffect } from "react";
import ExpiryChart from "./ExpiryChart";
import { useDispatch, useSelector } from "react-redux";
import { userProfileUpdate } from "../../redux/features/slices/profileUpdate";
import { getUserProfile } from "../../redux/features/actions/getProfile";
import userIcon from "@assets/images/user.png";
/* istanbul ignore next */
const SellerMainSidebar = () => {
  const dispatch = useDispatch();
  let profile = userIcon;
  const { userProfile } = useSelector(userProfileUpdate);

  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);
  if (userProfile) profile = userProfile.profilePic;
  return (
    <div
      data-testid="seller-sidebar"
      className="sidebar mr-5 bg-[#DBD2EA] px-5 py-8 flex flex-col justify-between items-center "
    >
      <div className="flex flex-col items-center justify-around">
        <div className="rounded-full w-20 h-20 overflow-hidden flex justify-center items-center">
          <img src={profile} alt="profile-image" className="w-20 h-20" />
        </div>
        <p className="flex flex-col justify-center items-center">
          <span className="text-center">{userProfile?.name}</span>
          <span className="text-gray-500">Seller</span>
        </p>
      </div>
      <div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
              <span className="font-bold">20</span>
              <span className="leading-4">Total Products</span>
            </p>
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
              <span className="font-bold">3000</span>
              <span>Amount</span>
            </p>
          </div>
          <div className="flex justify-between items-center my-3">
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
              <span className="font-bold">6</span>
              <span className="leading-4">Expired Products</span>
            </p>
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
              <span className="font-bold">3000</span>
              <span>Amount</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-48 h-48">
        <ExpiryChart expired={6} notExpired={14} />
      </div>
    </div>
  );
};

export default SellerMainSidebar;
