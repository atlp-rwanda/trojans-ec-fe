import ProductDetail from "../../../pages/dashboard/seller/ProductDetail.js/ProductDetail";
import React from "react";
import "@testing-library/jest-dom";
import { render } from "../../jest.setup";

describe("Testing single product view from seller dashboard", () => {
  it("Should render loading before", () => {
    const { getByText } = render(<ProductDetail />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});
