import React, { useEffect } from "react";
import ExpiryChart from "./ExpiryChart";
import { useDispatch, useSelector } from "react-redux";
import { userProfileUpdate } from "../../redux/features/slices/profileUpdate";
import { getUserProfile } from "../../redux/features/actions/getProfile";
import userIcon from "@assets/images/user.png";
import { getStatistic } from "../../redux/features/actions/statistic";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

/* istanbul ignore next */
const SellerMainSidebar = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  let profile = userIcon;
  const { userProfile } = useSelector(userProfileUpdate);

  const { loading, response, error, success,orders,isFetchingOrder } = useSelector(
      (state) => state.statistic
    );

  useEffect(() => {
    if (userProfile.length === 0) {
      dispatch(getUserProfile());
    }
    if(!response){
      dispatch(getStatistic())
    }
  }, [dispatch]);

  if(!loading&&!response){
navigate('/login');
  }

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
            {loading?(
                     <Skeleton
                     width={50}
                     height={20}
                     animation="wave"
                     variant="rectangular"
                     />
              ):(
              <span className="font-bold">{response?.stats.totalProducts}</span>
              )}
              <span className="leading-4">Total Products</span>
            </p>
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
            {loading?(
                 <Skeleton
                 width={50}
                 height={20}
                 animation="wave"
                 variant="rectangular"
                 />
              ):(
              <span className="font-bold">{response?.stats.totalProductsAmount}</span>
              )}
              <span>Amount</span>
            </p>
          </div>
          <div className="flex justify-between items-center my-3">
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
             
            {loading?(
                     <Skeleton
                     width={50}
                     height={20}
                     animation="wave"
                     variant="rectangular"
                     />
              ):(
                <span className="font-bold">  {response?.stats.expiredProducts}</span>
              )}
              <span className="leading-4">Expired Products</span>
            </p>
            <p className="flex flex-col justify-center items-center w-1/2 text-center">
            {loading?(
                     <Skeleton
                     width={50}
                     height={20}
                     animation="wave"
                     variant="rectangular"
                     />
              ):(
              <span className="font-bold">{response?.stats.totalLoss}</span>
              )}
              <span>Amount</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-48 h-48">
      {loading?(
               <Skeleton
               width={190}
               height={100}
               animation="wave"
               variant="rectangular"
               />
              ):(
        <ExpiryChart expired={response?.stats.expiredProducts} notExpired={response?.stats.totalProducts} />
              )}
      </div>
    </div>
  );
};

export default SellerMainSidebar;
