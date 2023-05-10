/* eslint-disable react/prop-types */
import React from "react";
import { getSeller } from "../../helpers/getSeller";
import { getProduct } from "../../helpers/getProduct";
import Header from "../../components/shared/Header.js";

const PaymentSuccessTable = (props) => {
    const { messageQuery, errorQuery, order, sellers, products } = props;
    return(
        <div data-testid="payment-table">
          <Header textContent={messageQuery} headerClassName="mb-4 w-full text-center" className="p-title m-auto font-semibold text-2xl text-center text-primary top-header"/>
          {errorQuery && <p className='m-auto w-full text-center lg:text-3xl mt-[1rem]'>{errorQuery}</p>}
            {order &&
          <div className="payment-info m-auto w-[400px]">
            <div className="flex justify-between amaout-pay-stat">
              <h1 className="font-bold pb-1 text-[14px]">Amount Paid: <span className="span-value">${order.Subtotal}</span></h1>
              <h1 className="font-bold pb-1 text-[14px]">Payment Status: <span className="span-value">{order.paymentStatus}</span></h1>
            </div>
            <h1 className="font-bold pb-1 text-[14px]">Order Status: <span className="span-value">{order.status}</span></h1>
            <h1 className="font-bold pb-1 text-[14px]">Date Paid: <span className="span-value">{new Date(order.createdAt).toString().substring(0, 25)}</span></h1>
            <h1 className="font-bold pb-1 text-[14px]">Delivery Date: <span className="span-value">{order.deliveredDate? new Date(order.deliveredDate).toDateString(): "Yet to be confirmed"}</span></h1>
            <div className='pb-1 pt-2 flex justify-between'>
              <h1 className="font-bold text-[16px]">Summary</h1>
              <h1 className="font-bold text-[16px]">Total: ${order.Subtotal}</h1>
            </div>
            <table className="w-full table" data-testid='table-payment'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='p-3 text-sm tracking-wide text-center'>Product</th>
                  <th className='p-3 text-sm tracking-wide text-center'>Seller</th>
                  <th className='p-3 text-sm tracking-wide text-center'>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {order.order.map((item) =>
                <tr
                data-testid="tb-row"
                key={item.id}
                className="bg-gray-200"
                >
                  <td className="p-2 text-md tracking-wide text-center text-[14px]">{getProduct(products, item.Productid).name}</td>
                  <td className="p-2 text-md tracking-wide text-center text-[14px]">
                  {getSeller(sellers, item.Sellerid).name}
                  </td>
                  <td className="p-2 text-md tracking-wide text-center text-[14px]">
                  {item.Quantity}
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
          }
        </div>
    );
}

export default PaymentSuccessTable;