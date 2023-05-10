/* eslint-disable react/prop-types */
import React from "react";
import PaymentSuccessTable from "./PaymentSuccessTable";
import ErrorHandler from '../shared/ErrorHandler.js';

const TableWithErrorHandler = (props) => {
    const {
        error,
        getProductsError,
        sellerError,
        loading,
        sellerLoading,
        productLoading,
        order,
        errorQuery,
        messageQuery,
        products,
        sellers,
    } = props;
    return(
        <div>
          {(error || getProductsError || sellerError)?
          <ErrorHandler
          loading={loading || sellerLoading || productLoading}
          error={{status: true, payload: "error"}}
          />:
          <PaymentSuccessTable 
          order={order}
          errorQuery={errorQuery}
          messageQuery={messageQuery}
          sellers={sellers}
          products={products}
          />
          }
        </div>
    );
}

export default TableWithErrorHandler;