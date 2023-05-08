import CartIcon from "../../../components/cart/CartIcon";
import React from "react";
import { render } from "../../jest.setup";
import "@testing-library/jest-dom";
import { cartState } from "../../mocks/cart.mock";

describe("Categorize component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(<CartIcon />, {
      preloadedState: {
        cart: cartState,
      },
    });
    expect(getByText(/0/i)).toBeInTheDocument();
  });
});
