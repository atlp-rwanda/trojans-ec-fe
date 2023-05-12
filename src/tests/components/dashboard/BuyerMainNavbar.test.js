import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import MainNavbar from "../../../components/dashboard/MainNavbar";
import BuyerLinks from "../../../components/dashboard/BuyerLinks";
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
      .mockReturnValue({ data: { data: { role: "buyer" } } });
    jwtDecode.mockImplementation(mockDecode);
    render(
      <MainNavbar
        links={<BuyerLinks />}
        active={active}
        setActive={setActive}
      />
    );
    expect(screen.getByText("Wishes")).toBeInTheDocument();
    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
