import React from "react";
import { render, screen, fireEvent, waitFor } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import CartSummary from "../../../components/cart/CartSummary";
import mockAxios from "../../../redux/axiosinstance";


describe("Tesing cart summary", () => {
  it("Should render all text and checkout functionality", async () => {
    mockAxios.post.mockResolvedValue({ data: { status: 200, url: "https://hfffsffdfdggd.com"} });
    await act(()=> render(<CartSummary total={2000}/>));
    expect(screen.getByText(/Cart Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
    expect(screen.getByText(/2000/i)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /Proceed Checkout/i})).toBeInTheDocument();
    
    await act(()=>fireEvent.click(screen.getByRole("button", {name: /Proceed Checkout/i})));
    await waitFor(()=>expect(screen.getByRole("button", {name: /Proceed Checkout/i})).toBeDisabled());
    const paymentLink = await screen.findByRole("link", {name: /Proceed Payment/i});
    const cancelBtn = await screen.findByRole("button", {name: /Cancel/i});
    
    expect(paymentLink).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    await act(()=>fireEvent.click(screen.getByRole("button", {name: /Cancel/i})));
    await waitFor(()=> {
      expect(paymentLink).not.toBeInTheDocument();
      expect(cancelBtn).not.toBeInTheDocument();
    });
    await waitFor(()=>expect(screen.getByRole("button", {name: /Proceed Checkout/i})).not.toBeDisabled());
  });
});
