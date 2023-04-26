import SellerMainNavbar from "../../../components/dashboard/SellerMainNavbar";
import SellerDashboard from "../../../pages/dashboard/seller/SellerDashboard";
import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

describe("Testing seller sidebar", () => {
  it("Should render sidebar", () => {
    render(<SellerMainNavbar />);
    const sidebar = screen.getByText(/Trojans/i);
    console.log(sidebar);
    expect(sidebar).toBeInTheDocument();
  });
  it("Should go home", () => {
    render(<SellerMainNavbar />);
    const dashboard = screen.getByText(/Dashboard/i);
    act(() => {
      fireEvent.click(dashboard);
    });
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId("home-link"));
    });
    expect(screen.getByText(/Trojans/i)).toBeInTheDocument();
  });
});
