/* eslint-disable no-unused-vars */
import SellerProductDetail from "../../../pages/dashboard/seller/SellerProductDetail";
import React from "react";
import "@testing-library/jest-dom";
import "setimmediate";
import { render } from "../../jest.setup";
import { productState } from "../../mocks/product.mock";
import SellerProducts from "../../../pages/dashboard/seller/SellerProducts";

describe("Testing products view from seller dashboard", () => {
  it("Should render loading before", () => {
    const { getByText } = render(<SellerProducts noSidebar={true} />, {
      preloadedState: {
        product: productState,
      },
    });
    expect(getByText(productState.products[0].name)).toBeInTheDocument();
  });
});
