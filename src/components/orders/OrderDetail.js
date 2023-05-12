import React from "react";
import shoe from "../../assets/images/shoe.jpeg";
import Spinner from "../products/viewProducts/spinner";
import { useSelector } from "react-redux";
import { formatDate } from "../../helpers/Format";

const OrderDetail = ({ setModal, modal, items }) => {
  const { selectLoading, selectedOrder } = useSelector((state) => state.orders);
  const { paymentStatus, status, deliveredDate, Subtotal } = selectedOrder;
  console.log(items);
  return (
    <>
      {selectLoading ? (
        <Spinner withoutText={true} />
      ) : (
        <div className="w-[250px] pb-2 relative border border-gray-400 rounded-md lg:w-[300px] bg-whiteColor">
          <button
              onClick={() => setModal(false)}
              className="rounded-md flex absolute right-0 top-0 justify-center items-center text-white bg-red-700 hover:bg-red-900 transition-all ease-linear duration-200"
            >
            <ion-icon name="close-outline"></ion-icon>
            </button>
          <h1 className="w-full my-4 text-center text-primary text-lg font-semibold">
            Order details
          </h1>
          <div>
            <div className="bg-[#fff] m-3">
              {items.map((item) => (
                <>
                  <div className="w-full flex justify-between items-center px-4 border border-x-0 ">
                    <div className="w-[15%] h-[40px] p-1 hover:p-0 transition-all ease-linear duration-300">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full rounded-md"
                      />
                    </div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </>
              ))}
              <div className="w-full flex  justify-between items-center px-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{Subtotal}</span>
              </div>
            </div>
          </div>
          <div className=" w-full h-[50%] flex flex-col justify-between items-start">
            <div className="h-[120px] transition-all ease-linear duration-300 hover:scale-[1.02] h-[50%] p-3 shadow-sm w-full flex flex-col justify-between items-start">
              <p className="flex justify-around items-center my-1">
                <span className="text-gray-600 mr-7">Delivered on:</span>
                <span className="text-primary font-semibold">
                  {formatDate(deliveredDate)}
                </span>
              </p>
              <p className="my-1">
                <span className="text-gray-600 mr-2 ">Payment status:</span>
                <span
                  className={`px-2 py-1 ${
                    paymentStatus === "delivered"
                      ? "bg-[#177E89]"
                      : paymentStatus === "complete"
                      ? "bg-green-500"
                      : "bg-yellow-600"
                  } rounded-md text-white`}
                >
                  {paymentStatus}
                </span>
              </p>
              <p className="my-1">
                <span className="text-gray-600 mr-2">Delivery Status:</span>
                <span
                  className={`px-2 py-1 ${
                    status === "delivered"
                      ? "bg-[#177E89]"
                      : status === "complete"
                      ? "bg-green-500"
                      : "bg-yellow-600"
                  } rounded-md text-white`}
                >
                  {status}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
