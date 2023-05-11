import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import { sellers } from "../../mocks/seller.mock";
import PaymentSuccessTable from "../../../components/payment/PaymentSuccessTable";
import { order } from "../../mocks/order.mock";
import { products } from "../../mocks/product.mock";

describe("Testing table renderering", () => {
  it("Should render Success payment component", () => {
   render(
      <PaymentSuccessTable
      messageQuery="Success payment"
      order={order}
      products={products}
      sellers={sellers}
      />
    );
    expect(screen.getByText(/Success payment/i)).toBeInTheDocument();
    expect(screen.getByText(/Yet to be confirmed/i)).toBeInTheDocument();
    expect(screen.getByText(/nike airforce/i)).toBeInTheDocument();
  });
  it("Should render Fail component", () => {
   render(
      <PaymentSuccessTable
      messageQuery="Fail"
      errorQuery="an erorr occured"
      />
    );
    expect(screen.getByText(/Fail/i)).toBeInTheDocument();
    expect(screen.getByText(/an erorr occured/i)).toBeInTheDocument();
  });
});
