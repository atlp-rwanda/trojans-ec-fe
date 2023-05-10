import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import MainNavbar from "../../../components/dashboard/MainNavbar";
import SellerLinks from "../../../components/dashboard/SellerLinks";
import jwtDecode from "jwt-decode";

jest.mock("jwt-decode");
let active = false;
const setActive = (value) => {
  active = value;
};
describe("Testing seller's navbar", () => {
  it("Should render the navbar", () => {
    const mockDecode = jest
      .fn()
      .mockReturnValue({ data: { data: { role: "seller" } } });
    jwtDecode.mockImplementation(mockDecode);
    render(
      <MainNavbar
        links={<SellerLinks />}
        active={active}
        setActive={setActive}
      />
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText("Products"));
    });
    expect(screen.getByText("Products")).toBeInTheDocument();
  });
});
