import CartCard from "../../../components/cart/CartCard";
import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { sellers } from "../../mocks/seller.mock";

const item = {
  id: 2,
  name: "nike airforce",
  image:
    "https://res.cloudinary.com/dqk2wjyyz/image/upload/v1676491920/TrojansEcommerce/pqlvnsvkskzx4zo1trpb.jpg",
  price: "2500",
  Ptotal: "2500",
  quantity: 1,
  sellerId: 7,
  categoryId: 1,
};

const regExp = (str) => new RegExp(str, "i");
describe("Categorize component", () => {
  it("Should render all text", async () => {
    const { getByText } = render(<CartCard item={item} sellers={sellers} />, {
      preloadedState: {
        requestQuantity: 1,
      },
    });
    expect(getByText(regExp(item.name))).toBeInTheDocument();
    expect(getByText(/Update quantity/i)).toBeInTheDocument();
    const increaseQuantityBtn = getByText("+");
    const decreaseQuantityBtn = getByText("-");
    const quantity = screen.getByTestId(/cartQuantity/i);
    expect(quantity).toBeInTheDocument();
    expect(decreaseQuantityBtn).toBeInTheDocument();
    expect(increaseQuantityBtn).toBeInTheDocument();
    quantity.textContent = "1";
    fireEvent.click(increaseQuantityBtn);
    expect(quantity.textContent).toBe("2");
    fireEvent.click(decreaseQuantityBtn);
    expect(quantity.textContent).toBe("1");
  });
});
