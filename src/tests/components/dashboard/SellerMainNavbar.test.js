import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import SellerMainNavbar from "../../../components/dashboard/SellerMainNavbar";

let active = false;
const setActive = (value) => {
  active = value;
};
describe("Testing seller's navbar", () => {
  it("Should render the navbar", () => {
    render(<SellerMainNavbar active={active} setActive={setActive} />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText("Products"));
    });
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
});
