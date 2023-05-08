import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSellersThunk,
  getWishListThunk,
} from "../../redux/features/actions/wishlist";
import { getWishList } from "../../redux/features/slices/wishlist";
import ErrorHandler from "../shared/ErrorHandler";
import LoadingNewCard from "../skeleton/LoadingNewCard";
import NewProductCard from "../shared/NewProductCard";
/* istanbul ignore next */
export default function ViewWishlist() {
  const dispatch = useDispatch();
  const { error, loading, wishlist, sellers, response } =
    useSelector(getWishList);
  useEffect(() => {
    dispatch(getWishListThunk()).then(() => dispatch(getSellersThunk()));
  }, [dispatch]);
  return (
    <div className="w-full h-full lg:full">
      <ErrorHandler error={error} loading={loading} />
      {!error.status && (
        <h1 className="ml-10 font-semibold text-2xl mb-4 text-dark text-center">
          Wish List
        </h1>
      )}
      {loading ? (
        <LoadingNewCard count={3} />
      ) : (
        <>
          {!error.status && wishlist.length > 0 && response && (
            <div className="w-full lg:w-[100%] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {wishlist.map((wish) => (
                <NewProductCard
                  key={wish.id}
                  product={wish.product}
                  sellers={sellers}
                />
              ))}
            </div>
            // </div>
          )}
          {!error.status && wishlist.length === 0 && response && (
            <div className="w-full flex justify-center items-center">
              <div className="m-7 w-full lg:w-[40vw] h-[60vh] flex flex-col justify-center items-center text-right rounded-xl border border-gray-300">
                <p>No wishes yet!</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
