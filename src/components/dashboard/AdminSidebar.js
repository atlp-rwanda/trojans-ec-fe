import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileUpdate } from "../../redux/features/slices/profileUpdate";
import { getUserProfile } from "../../redux/features/actions/getProfile";
import userIcon from "@assets/images/user.png";
const AdminSidebar = () => {
  const dispatch = useDispatch();
  let profile = userIcon;
  const { userProfile } = useSelector(userProfileUpdate);
  console.log(userProfile);
  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);
  if (userProfile) profile = userProfile.profilePic;
  return (
    <div className="sidebar mr-9 bg-[#DBD2EA] px-5 py-8 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-around items-center">
        <div className="rounded-full w-32 h-32 overflow-hidden flex justify-center items-center">
          <img src={profile} alt="profile-image" className="w-32 h-32" />
        </div>
        <p className="flex flex-col justify-center items-center mt-3">
          <span className="font-semibold text-xl text-center">
            {userProfile?.name}
          </span>
          <span className="text-gray-500 text-xl mt-1">Admin</span>
        </p>
      </div>
      <div className="flex flex-col justify-around items-center h-1/2 mb-[20px]">
        <span className="key-icon">
          <ion-icon name="key-outline"></ion-icon>
        </span>
        <p className="text-4xl text-primary">Protect</p>
        <p className="text-4xl text-dark font-semibold">Your Site</p>
      </div>
    </div>
  );
};

export default AdminSidebar;
