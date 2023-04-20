import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import FormContainerTwoFact from "../../../components/twoFactor/TwoFctFormCon";

it("render page TwoFactor form with all inputs component", async () => {
    render(<FormContainerTwoFact/>);
    expect(screen.getByRole("heading", {name: /Enter verification code/i})).toBeInTheDocument();
    expect(screen.getByText(/Expires In:/i)).toBeInTheDocument();
    expect(screen.getByRole("link", {name: /try again/i})).toBeInTheDocument();
  });
