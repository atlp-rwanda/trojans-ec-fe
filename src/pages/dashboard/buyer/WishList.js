import React from "react";
import ViewWishlist from "../../../components/wishlist/ViewWishlist";
import BuyerMain from "./BuyerMain";
const WishList = () => {
  return (
    <div>
      <BuyerMain element={<ViewWishlist />} link={1} />
    </div>
  );
};

export default WishList;
