import React from "react";
import Images from "./Images";
import WishlistPopup from "../../wishlist/wishlistPopup";
import "../../../styles/wishlist.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import UseSingleMainView from "../../hooks/useSingleMainView";
import SingleProductDetail from "./SingleProductDetail";
import { LoadingSingleMain } from "../../skeleton/LoadingSingleMain";
import SuccessFailPopup from "../../shared/SuccessFailPopup";
/* istanbul ignore next */
const SingleMainView = ({ selectedProduct, categories, loading }) => {
  const {
    addToCartHandler,
    addWishlist,
    toggleModal,
    wishLoading,
    added,
    addedWish,
    wishError,
    modal,
  } = UseSingleMainView();
  if (wishError.payload === 401 && wishError.status) {
    toast.error("You are not authorized");
  } else if (wishError.payload === "Network Error" && wishError.status) {
    toast.error("Check your internet connection and try again!");
  } else if (wishError.status) {
    toast.error("Something went wrong");
  }

  return (
    <>
      {loading ? (
        <LoadingSingleMain />
      ) : (
        <div className="w-full flex justify-center flex-col items-center sm:flex-row sm:justify-center">
          <ToastContainer />
          <div className="sm:mr-10">
            <Images images={selectedProduct.images} />
          </div>
          <SingleProductDetail
            addToCartHandler={addToCartHandler}
            addWishlist={addWishlist}
            categories={categories}
            selectedProduct={selectedProduct}
            loading={loading}
            wishLoading={wishLoading}
            addedWish={addedWish}
          />
          {modal && (
            <div className="modal mt-[10%]">
              <div onClick={toggleModal} className="overlay"></div>
              <WishlistPopup
                success={true}
                handleClick={toggleModal}
                statusMessage={"Success"}
                message={`${added ? "Added to" : "Removed from"} wishlist`}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SingleMainView;
