import React, { useEffect } from "react";
import ProductsTable from "../../../../components/products/viewProducts/ProductsTable.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../../../redux/features/actions/products.js";
import {
  getProduct,
  setSuccessMsg,
  setUpdateDelError,
} from "../../../../redux/features/slices/products.js";
import Spinner from "../../../../components/products/viewProducts/spinner.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../../../helpers/parseJwt.js";
import ErrorHandler from "../../../../components/shared/ErrorHandler.js";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {
    loading,
    error,
    products,
    categories,
    successMsg,
    updateDelError,
  } = useSelector(getProduct);

  const handleClick = () => {
    dispatch(setUpdateDelError({ updateDelError: null }));
    dispatch(setSuccessMsg({ successMsg: null }));
  };
  
  useEffect(() => {
    if (token) {
      const { data } = parseJwt(token);
      if (data.role !== "seller") {
        navigate("/");
      }
    }
  }, [token]);
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
   if(successMsg){
      toast.success(successMsg, {onClose: handleClick});
      return;
    }
    if(updateDelError){
      toast.error(updateDelError, {onClose: handleClick});
      return;
    }
  }, [successMsg, updateDelError]);
  return (
    <div className="all-products">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <ToastContainer/>
          <ProductsTable
          products={products}
          categories={categories}
          />
        </>
      )}
    </div>
  );
};

export default AllProducts;
