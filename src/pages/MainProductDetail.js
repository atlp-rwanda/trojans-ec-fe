import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCategoriesThunk,
  getOneProductThunk,
} from "../redux/features/actions/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSelectedProduct } from "../redux/features/slices/products";
import SingleMainView from "../components/products/viewProducts/SingleMainView";
import { getCartThunk } from "../redux/features/actions/cart";
import ErrorHandler from "../components/shared/ErrorHandler";
import { getWishListThunk } from "../redux/features/actions/wishlist";
import RecommendProducts from "../components/recommend/recommend.products";
import Navbar from "../components/Navbar";

const MainProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct, loading, categories, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishListThunk());
    dispatch(getCategoriesThunk());
    dispatch(getOneProductThunk(id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  return (
    <>
      <ErrorHandler
        loading={loading}
        error={error}
        message={"You need a buyer's account to perform any cart operations"}
        to={"home"}
      />
      {!error.status && (
        <div>
          <Navbar />
          <SingleMainView
            selectedProduct={selectedProduct}
            categories={categories}
            loading={loading}
          />
        </div>
      )}
      <RecommendProducts
        id={id}
        selectedProduct={selectedProduct}
        categories={categories}
      />
    </>
  );
};

export default MainProductDetail;
