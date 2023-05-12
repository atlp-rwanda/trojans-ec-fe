import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../helpers/getSeller";
import OrderDetail from "./OrderDetail";
import { useDispatch } from "react-redux";
import { getOneOrderThunk } from "../../redux/features/actions/order";
const OrderCard = ({ order }) => {
  // const product = getProduct(products, order.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const goTo = () => {
  //   navigate(`/products/${product.id}`);
  // };
  const [modal, setModal] = useState(false);
  const seeOrder = (id) => {
    dispatch(getOneOrderThunk(id));
    setModal(true);
  };
  return (
    <>
      {order && (
        <div
          //   onClick={goTo}
          className="max-w-[100%] hover:scale-[1.02] hover:cursor-pointer h-96 mb-3 rounded-lg transition-all duration-200 ease-linear border shadow-md bg-whiteColor border-purple-100 flex flex-col justify-between items-center"
        >
          <div className="w-full p-2 hover:p-0 transition-all duration-200 ease-in bg-transparent h-[68%] flex justify-center overflow-hidden">
            <img
              src={order.items[0].image}
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="px-3 py-2 flex flex-col justify-around items-center w-full h-[32%]">
            <div className="flex justify-around items-center w-[90%]">
              <p className="font-[400] w-[75%] text-center">
                <span className="font-regular  text-gray-600"> Status:</span>
                <span
                  className={`ml-3 px-2 py-1 rounded-md  text-white ${
                    order.status === "delivered"
                      ? "bg-[#177E89]"
                      : order.status === "complete"
                      ? "bg-green-500"
                      : "bg-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </p>
              {/* <p className="w-[25%] flex justify-end italic text-sm">In Stock</p> */}
            </div>
            <div className="flex justify-center items-center w-full px-3">
              <button
                onClick={() => seeOrder(order.id)}
                className="px-3 py-1 rounded-sm bg-primary text-white hover:bg-dark transition-all duration-200 ease-linear hover:cursor-pointer"
              >
                View Order
              </button>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className="modal w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="overlay w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49, 49, 49, 0.6)]"></div>
          <div className="absolute z-20 w-full h-full flex justify-center items-center">
            <OrderDetail
              setModal={setModal}
              id={order.id}
              modal={modal}
              items={order.items}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderCard;