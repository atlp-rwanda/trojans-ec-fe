import MainProductDetail from "../../../pages/MainProductDetail";
import React from "react";
import { render, waitForElementToBeRemoved } from "../../jest.setup";
import "@testing-library/jest-dom";
import { productState } from "../../mocks/product.mock";
import { cartState } from "../../mocks/cart.mock";

describe("Main product detail view page", () => {
  it("Should render all text", () => {
    const { getByText } = render(<MainProductDetail />);
    expect(getByText(/Loading.../i)).toBeInTheDocument();
  });
});

