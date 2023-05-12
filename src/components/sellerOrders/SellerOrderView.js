import React, { useEffect } from "react";
import SellerOrderCard from "./SellerOrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getSaleThunk } from "../../redux/features/actions/sales";
import { updateSaleThunk } from "../../redux/features/actions/sales";
import { ToastContainer, toast } from "react-toastify";

const SellerOrderView = () => {
  const dispatch = useDispatch();
  const { isLoading, response } = useSelector((state) => state.getSales);
  useEffect(() => {
    dispatch(getSaleThunk());
  }, [dispatch]);
  const Sales = response.message;
  let viewSales;
  const handleAccept = (id, status) => {
    if (status === "pending") {
      const Status = "accepted";
      dispatch(updateSaleThunk({ id, Status }));
    } else if (status === "accepted") {
      toast.error("the order is already accepted");
    } else if (status === "delivered" ) {
      toast.error("this product is already delivered");
    } else if (status === "declined") {
      toast.error("this product is already declined");
    }
  };
  const handleDecline = (id, status) => {
    if (status === "accepted") {
      toast.error("this product is already accepted");
    } else if (status === "delivered") {
      toast.error("this product is already deliverd");
    } else if (status === "declined") {
      toast.error("this product is already declined");
    } else {
      const Status = "declined";
      dispatch(updateSaleThunk({ id, Status }));
    }
  };

  const handleDeliver = (id, status) => {
    if (status === "declined") {
      toast.error("this product is already declined");
    } else if (status === "pending") {
      toast.error("you need to approve the order first");
    } else if (status === "delivered") {
      toast.error("this order is already delivered");
    } else {
      const Status = "delivered";
      dispatch(updateSaleThunk({ id, Status }));
    }
  };
  if (Array.isArray(Sales)) {
    viewSales = Sales.map((sale) => {
      return (
        <SellerOrderCard
          key={sale.id}
          id={sale.id}
          status={sale.Status}
          product={sale.product}
          onAccept={() => {
            handleAccept(sale.id, sale.Status);
          }}
          onDecline={() => {
            handleDecline(sale.id, sale.Status);
          }}
          onDeliver={() => {
            handleDeliver(sale.id, sale.Status);
          }}
        />
      );
    });
  } else {
    viewSales = "No order yet";
  }
  return (
    <>
      <ToastContainer />
      <div className="w-full lg:w-[100%] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {viewSales}
      </div>
    </>
  );
};

export default SellerOrderView;
