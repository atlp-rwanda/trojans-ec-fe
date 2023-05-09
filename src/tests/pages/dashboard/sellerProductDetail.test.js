import SellerProductDetail from "../../../pages/dashboard/seller/SellerProductDetail";
import React from "react";
import "@testing-library/jest-dom";
import { render } from "../../jest.setup";
import { productState } from "../../mocks/product.mock";

describe("Testing single product view from seller dashboard", () => {
  it("Should render loading before", () => {
    const { getByText } = render(<SellerProductDetail noSidebar={true} />, {
      preloadedState: {
        product: productState,
      },
    });
    expect(getByText(/Trojans Store/i)).toBeInTheDocument();
  });
});
