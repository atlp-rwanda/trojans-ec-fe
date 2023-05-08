import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import TwoFactorForm from "../../../components/twoFactor/TwoFactorForm";

it("render page TwoFactor form with all inputs component", async () => {
    render(<TwoFactorForm/>);
    expect(screen.getByPlaceholderText('1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('2')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('3')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('4')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('5')).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /verify/i})).toBeInTheDocument();
  });
