import React, { useEffect, useState } from "react";
import ProductsTable from "../../../components/products/viewProducts/ProductsTable";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../redux/features/actions/products.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  setSuccessMsg,
  setUpdateDelError,
} from "../../../redux/features/slices/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ErrorHandler from "../../../components/shared/ErrorHandler";
import SellerMain from "./SellerMain";
const SellerProducts = ({ noSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {
    loading,
    error,
    products,
    categories,
    response,
    successMsg,
    updateDelError,
  } = useSelector(getProduct);
  const handleClick = () => {
    dispatch(setUpdateDelError({ updateDelError: null }));
    dispatch(setSuccessMsg({ successMsg: null }));
  };
  useEffect(() => {
    if (token) {
      dispatch(getCategoriesThunk()).then(() => {
        dispatch(getProductsThunk(token));
      });
    } else {
      navigate("/login");
    }
  }, [token]);
  useEffect(() => {
    if (successMsg) {
      toast.success(successMsg, { onClose: handleClick });
      return;
    }
    if (updateDelError) {
      toast.error(updateDelError, { onClose: handleClick });
      return;
    }
  }, [successMsg, updateDelError]);
  return (
    <div className="">
      <ToastContainer />
      <ErrorHandler loading={loading} error={error} />
      <>
        {!error.status && (
          <SellerMain
            element={
              <ProductsTable
                products={products}
                categories={categories}
                loading={loading}
                response={response}
              />
            }
            noSidebar={noSidebar}
          />
        )}
      </>
    </div>
  );
};

export default SellerProducts;
