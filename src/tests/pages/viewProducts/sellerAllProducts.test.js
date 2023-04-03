import AllProducts from "../../../pages/dashboard/seller/AllProducts/allProducts";
import React from "react";
import "@testing-library/jest-dom";
import { render } from "../../jest.setup";

describe("Testing all products view from seller dashboard", () => {
  it("Should render loading before", () => {
    const { getByText } = render(<AllProducts />);
    expect(getByText(/No products yet/i)).toBeInTheDocument();
  });
});
