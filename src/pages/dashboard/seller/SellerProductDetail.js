import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProductThunk } from "../../../redux/features/actions/products";
import SingleProductView from "../../../components/viewProducts/SingleProductView";
import {
  getProduct,
  removeSelectedProduct,
} from "../../../redux/features/slices/products.js";
import ErrorHandler from "../../../components/shared/ErrorHandler.js";
import SellerMain from "./SellerMain";

const SellerProductDetail = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();

  useEffect(() => {
    dispatch(getOneProductThunk(productID));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productID]);
  const { selectedProduct, loading, error, categories } =
    useSelector(getProduct);
  return (
    <div className="">
      <ErrorHandler loading={loading} error={error} />
      <>
        {!error.status && (
          <SellerMain
            element={
              <SingleProductView
                product={selectedProduct}
                categories={categories}
                loading={loading}
              />
            }
          />
        )}
      </>
    </div>
  );
};

export default SellerProductDetail;
