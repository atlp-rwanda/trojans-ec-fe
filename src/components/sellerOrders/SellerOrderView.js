import React, { useEffect, useState } from "react";
import SellerOrderCard from "./SellerOrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getSaleThunk } from "../../redux/features/actions/sales";
import { updateSaleThunk } from "../../redux/features/actions/sales";
import { ToastContainer, toast } from "react-toastify";
import LoadingNewCard from "../skeleton/LoadingNewCard";

const SellerOrderView = () => {
  const dispatch = useDispatch();
  const [updated, setUpdated] = useState();
  const { isLoading, response, sales, statusLoading } = useSelector(
    (state) => state.sales
  );
  useEffect(() => {
    dispatch(getSaleThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getSaleThunk());
  }, [statusLoading]);

  let viewSales;
  const handleAccept = async (id, status) => {
    const Status = "accepted";
    if (status === "pending") {
      setUpdated(id);
      dispatch(updateSaleThunk({ id, Status }));
    } else if (status === "accepted") {
      toast.error("the order is already accepted");
    } else if (status === "delivered") {
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
      setUpdated(id);
      dispatch(updateSaleThunk({ id, Status }));
    }
  };

  const handleDeliver = (id, status) => {
    if (status === "declined") {
      toast.error("this product is already declined");
    } else if (status === "created") {
      toast.error("you need to approve the order first");
    } else if (status === "delivered") {
      toast.error("this order is already delivered");
    } else {
      const Status = "delivered";
      setUpdated(id);
      dispatch(updateSaleThunk({ id, Status }));
    }
  };
  if (Array.isArray(sales)) {
    viewSales = sales.map((sale) => {
      return (
        <SellerOrderCard
          key={sale.id}
          id={sale.id}
          status={sale.Status}
          product={sale.product}
          updated={updated}
          onAccept={() => {
            handleAccept(sale.id, sale.Status);
          }}
          onDecline={() => {
            handleDecline(sale.id, sale.Status);
          }}
          onDeliver={() => {
            handleDeliver(sale.id, sale.Status);
          }}
          isLoading={isLoading}
          statusLoading={statusLoading}
        />
      );
    });
  } else {
    viewSales = "No order yet";
  }
  return (
    <>
      <ToastContainer />
      {!response && <LoadingNewCard count={3}/>}
      {response && (
        <div className="w-full lg:w-[100%] justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {viewSales}
        </div>
      )}
    </>
  );
};

export default SellerOrderView;
