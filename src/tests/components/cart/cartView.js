import CartView from "../../../components/cart/CartView";
import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { sellers } from "../../mocks/seller.mock";
import { items } from "../../mocks/cart.mock";
import { cartState } from "../../mocks/cart.mock";

describe("Testing cart view", () => {
  it("Should render all components", () => {
    const { getByText } = render(
      <CartView
        numberOfItems={1}
        cart={items}
        total={10000}
        sellers={sellers}
      />,
      {
        preloadedState: {
          cart: cartState,
        },
      }
    );
    expect(screen.getByText(/Cart Summary/i)).toBeInTheDocument();
  });
});
