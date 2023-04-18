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
import Error from "../components/shared/Error";

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
  if (error.status) {
    if (error.payload === 401) {
      return (
        <Error
          code={401}
          title={"Not authorized"}
          description={
            "You need a buyer's account to perform any cart operations"
          }
          to={"login"}
        />
      );
    } else if (error.payload === "Network Error") {
      return (
        <Error
          code="Error"
          title="Internet connection error"
          description="There is a problem with your internet connection, check it and reload again"
          to="reload"
        />
      );
    } else {
      return <Error />;
    }
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
