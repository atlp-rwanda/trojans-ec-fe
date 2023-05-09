import MainNavbar from "../../../components/dashboard/MainNavbar";
import SellerLinks from "../../../components/dashboard/SellerLinks";
import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
let active = false;
const setActive = (value) => {
  active = value;
};
describe("Testing seller sidebar", () => {
  it("Should render sidebar", () => {
    render(
      <MainNavbar
        active={active}
        setActive={setActive}
        links={<SellerLinks />}
      />
    );
    const sidebar = screen.getByText(/Trojans/i);
    console.log(sidebar);
    expect(sidebar).toBeInTheDocument();
  });
  it("Should go home", () => {
    render(
      <MainNavbar
        active={active}
        setActive={setActive}
        links={<SellerLinks />}
      />
    );
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
