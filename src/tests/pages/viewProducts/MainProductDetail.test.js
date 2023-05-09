import MainProductDetail from "../../../pages/MainProductDetail";
import React from "react";
import { render, waitForElementToBeRemoved, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import { productState } from "../../mocks/product.mock";
import { cartState } from "../../mocks/cart.mock";

describe("Main product detail view page", () => {
  it("Should render all text", () => {
    render(<MainProductDetail />);
    const skeleton = screen.getByTestId("skel-singleMain");
    expect(skeleton).toBeInTheDocument();
  });
});
