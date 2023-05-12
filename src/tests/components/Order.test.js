import OrderCard from "../../components/orders/OrderCard";
import React from "react";
import { render, screen } from "../jest.setup";
import "@testing-library/jest-dom";
import OrderDetail from "../../components/orders/OrderDetail";
import { products } from "../mocks/product.mock";

const orders = [
  {
    id: 2,
    Subtotal: "6000",
    deliveredDate: "2023-09-05T00:00:00.000Z",
    status: "delivered",
  },
];
const orderState = {
  selectedOrder: {
    id: 2,
    paymentStatus: "complete",
    status: "complete",
    Subtotal: "2000",
    deliveredDate: "12/2/2023",
  },
  selectLoading: false,
  orders,
  loading: false,
  error: { payload: null, status: false },
};

describe("Testing order card", () => {
  it("Should render order card", () => {
    render(
      <OrderCard products={products} order={{ status: "completed", id: 2, items:products }} />
    );
    expect(screen.getByText("Status:")).toBeInTheDocument();
  });
  it("Should render order details", () => {
    render(
      <OrderDetail
        setModal={jest.fn()}
        modal={false}
        items={products}
      />,
      {
        preloadedState: {
          orders: orderState,
        },
      }
    );
    expect(screen.getByText("nike airforce")).toBeInTheDocument();
  });
 
});
