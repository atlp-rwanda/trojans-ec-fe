import React from "react";
import { render, screen, fireEvent } from "../../jest.setup";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import MainNavbar from "../../../components/dashboard/MainNavbar";
import BuyerLinks from "../../../components/dashboard/BuyerLinks";

let active = false;
const setActive = (value) => {
  active = value;
};
describe("Testing seller's navbar", () => {
  it("Should render the navbar", () => {
    render(
      <MainNavbar
        links={<BuyerLinks />}
        active={active}
        setActive={setActive}
      />
    );
    expect(screen.getByText("Wishes")).toBeInTheDocument();
    expect(screen.getByText("Orders")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
