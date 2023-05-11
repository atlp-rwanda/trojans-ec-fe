import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/features/slices/products";
import { getProductsThunk } from "../../redux/features/actions/products";
import { getOrdersThunk } from "../../redux/features/actions/order";
import LoadingNewCard from "../skeleton/LoadingNewCard";
import OrderCard from "./OrderCard";
import ErrorHandler from "../shared/ErrorHandler";
const OrderView = () => {
  const dispatch = useDispatch();
  const { error, loading, orders, response } = useSelector(
    (state) => state.orders
  );
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getOrdersThunk());
    };
    fetchData();
  }, [dispatch]);
  console.log(orders)
  return (
    <div className="w-full h-full">
      <ErrorHandler error={error} loading={loading} />
      {!error.status && (
        <h1 className="ml-10 font-semibold text-2xl mb-4 text-dark text-center">
          Orders
        </h1>
      )}
      {loading ? (
        <div className="w-full h-full">
          <LoadingNewCard count={6} />
        </div>
      ) : (
        <div className="w-full">
          {" "}
          {response && orders.length > 0 && (
            <div className="w-full h-full justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
          {response && orders.length === 0 && (
            <>
              <div className="m-7 lg:w-[90%] h-[60vh] flex flex-col justify-center items-center text-right rounded-xl border border-gray-300">
                <p>No Orders yet!</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderView;