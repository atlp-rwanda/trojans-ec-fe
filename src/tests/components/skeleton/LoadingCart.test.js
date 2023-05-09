import { LoadingCart } from "../../../components/skeleton/LoadingCart";
import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";

describe("Loading cart skeleton", () => {
  it("Should render the skeleton", () => {
    render(<LoadingCart />);
    const cartSkel = screen.getByTestId("skel-cart");
    expect(cartSkel).toBeInTheDocument();
  });
});
