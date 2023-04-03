import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getCategoriesThunk,
  getOneProductThunk,
} from "../redux/features/actions/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProduct } from "../redux/features/slices/products";
import { removeSelectedProduct } from "../redux/features/slices/products";
import Spinner from "../components/viewProducts/spinner";
import SingleMainView from "../components/viewProducts/SingleMainView";

const MainProductDetail = () => {
  const { id } = useParams();
  const { selectedProduct, loading, categories } = useSelector(getProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getOneProductThunk(id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <SingleMainView selectedProduct={selectedProduct} categories={categories} />
  );
};

export default MainProductDetail;
