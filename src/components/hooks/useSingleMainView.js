/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWishListThunk } from "../../redux/features/actions/wishlist";
import { getWishList } from "../../redux/features/slices/wishlist";
import { getWishListThunk } from "../../redux/features/actions/wishlist";
import {
  addToCartThunk,
  getCartThunk,
} from "../../redux/features/actions/cart";
import { getCart } from "../../redux/features/slices/cart";
import { toast } from "react-toastify";

export default function UseSingleMainView() {
  const dispatch = useDispatch();
  const { error } = useSelector(getCart);
  const addToCartHandler = (selectedProduct) => {
    dispatch(addToCartThunk(selectedProduct.id)).then(() =>
      dispatch(getCartThunk())
    );
    if (error.status === true) {
      if (error.payload === 401) {
        toast.error("You need a buyer's account");
      }
    }
  };
  const { added, addedWish } = useSelector(getWishList);
  const wishLoading = useSelector(getWishList).loading;
  const wishError = useSelector(getWishList).error;
  const [modal, setModal] = useState(false);
  const addWishlist = async (selectedProduct) => {
    await dispatch(addWishListThunk(selectedProduct.id));
    await dispatch(getWishListThunk());
    setModal(true);
  };
  const toggleModal = () => {
    setModal(!modal);
  };
  return {
    addToCartHandler,
    addWishlist,
    toggleModal,
    wishLoading,
    added,
    addedWish,
    wishError,
    modal,
  };
}
