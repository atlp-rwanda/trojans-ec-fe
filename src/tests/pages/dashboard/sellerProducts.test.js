/* eslint-disable no-unused-vars */
import SellerProductDetail from "../../../pages/dashboard/seller/SellerProductDetail";
import React from "react";
import "setimmediate";
import "@testing-library/jest-dom";
import { render } from "../../jest.setup";
import { productState } from "../../mocks/product.mock";
import SellerProducts from "../../../pages/dashboard/seller/SellerProducts";
import jwtDecode from "jwt-decode";

jest.mock("jwt-decode");
describe("Testing products view from seller dashboard", () => {
  it("Should render loading before", () => {
    const mockDecode = jest
      .fn()
      .mockReturnValue({ data: { data: { role: "seller" } } });
    jwtDecode.mockImplementation(mockDecode);
    const { getByText } = render(<SellerProducts noSidebar={true} />, {
      preloadedState: {
        product: productState,
      },
    });
    expect(getByText(productState.products[0].name)).toBeInTheDocument();
  });
});
