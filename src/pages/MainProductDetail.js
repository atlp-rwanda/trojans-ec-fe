import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCategoriesThunk,
  getOneProductThunk,
} from "../redux/features/actions/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSelectedProduct } from "../redux/features/slices/products";
import Spinner from "../components/viewProducts/spinner";
import SingleMainView from "../components/viewProducts/SingleMainView";
import CartIcon from "../components/cart/CartIcon";
import { getCartThunk } from "../redux/features/actions/cart";
import ErrorHandler from "../components/shared/ErrorHandler";

const MainProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct, loading, categories, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
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
      {loading && <Spinner />}
      <ErrorHandler
        loading={loading}
        error={error}
        message={"You need a buyer's account to perform any cart operations"}
        to={"home"}
      />
      {!loading && !error.status && (
        <div>
          <CartIcon />
          <SingleMainView
            selectedProduct={selectedProduct}
            categories={categories}
          />
        </div>
      )}
    </>
  );
};

export default MainProductDetail;
