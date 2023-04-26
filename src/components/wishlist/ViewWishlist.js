import React, { useEffect } from "react";
import WishCard from "./WishCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getSellersThunk,
  getWishListThunk,
} from "../../redux/features/actions/wishlist";
import { getWishList } from "../../redux/features/slices/wishlist";
import ErrorHandler from "../shared/ErrorHandler";
import { LoadingWishlist } from "../skeleton/LoadingWishlist";
/* istanbul ignore next */
export default function ViewWishlist() {
  const dispatch = useDispatch();
  const { error, loading, wishlist, sellers } = useSelector(getWishList);
  useEffect(() => {
    dispatch(getWishListThunk()).then(() => dispatch(getSellersThunk()));
  }, [dispatch]);
  return (
    <div className="w-full h-full lg:full">
      <ErrorHandler error={error} loading={loading} />
      {!error.status && (
        <h1 className="ml-10 font-semibold text-xl text-dark">Wish List</h1>
      )}
      {loading ? (
        <LoadingWishlist count={3} />
      ) : (
        <>
          {!error.status && wishlist.length > 0 && (
            // <div className="grid grid-cols-3">
            <div className="w-full lg:w-[100%]  lg:grid lg:grid-cols-2 gap-5">
              {wishlist.map((wish) => (
                <WishCard
                  key={wish.id}
                  product={wish.product}
                  sellers={sellers}
                />
              ))}
            </div>
            // </div>
          )}
          {!error.status && wishlist.length === 0 && (
            <>
              <div className="m-7 lg:w-full h-[60vh] flex flex-col justify-center items-center text-right rounded-xl border border-gray-300">
                <p>No wishes yet!</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
