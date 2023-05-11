import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Spinner from "../components/products/viewProducts/spinner.js";
import paymentSuccessThunk from "../redux/features/actions/paymentSuccess";
import { getPaymentSuccess } from '../redux/features/slices/paymentSuccess';
import { getCart } from "../redux/features/slices/cart";
import { getSellersThunk } from "../redux/features/actions/cart";
import { getProductsThunk } from "../redux/features/actions/products";
import ErrorHandler from '../components/shared/ErrorHandler.js';
import TableWithErrorHandler from "../components/payment/TableWithErrorHandler";
import Navbar from "../components/Navbar";

function PaymentComfirmation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading, error, order } = useSelector(getPaymentSuccess);
  const { loading: sellerLoading, error: sellerError, sellers } = useSelector(getCart);
  const { loading:productLoading, error:getProductsError, products } = useSelector((state) => state.product);
  const searchParams = new URLSearchParams(location.search);
  const messageQuery = searchParams.get('message');
  const errorQuery = searchParams.get('error');
  const orderQuery = searchParams.get('order');
  
  /* istanbul ignore next */
  useEffect(()=>{
    if(orderQuery){
      dispatch(paymentSuccessThunk(orderQuery));
      dispatch(getSellersThunk());
      dispatch(getProductsThunk());
    }
  }, [dispatch, orderQuery])

  return (
    <div>
      {(!orderQuery && !errorQuery) ?
      <ErrorHandler
      loading={loading || sellerLoading || productLoading}
      error={{status: true, payload: 401}}
      message="Access denied" to="home"
      />:
    <div data-testid="comfirm-payment-page">
      {loading || sellerLoading || productLoading ? <Spinner />:
        <>
        <Navbar />
        <TableWithErrorHandler
        messageQuery={messageQuery}
        errorQuery={errorQuery}
        order={order}
        productLoading={productLoading}
        sellerLoading={sellerLoading}
        loading={loading}
        sellerError={sellerError.payload}
        getProductsError={getProductsError.payload}
        error={error}
        products={products}
        sellers={sellers}
        />
        </>
        }
    </div>
      }
    </div>
  )
}

export default PaymentComfirmation;
