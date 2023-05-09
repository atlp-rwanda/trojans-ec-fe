import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import EmailReceived from "../../../components/twoFactor/EmailReceived";

describe("render page got email component", () => {
  it("render page got email component", async () => {
    render(<EmailReceived />);
    expect(
      screen.getByText(/We sent you a verification code/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Got it/i })).toBeInTheDocument();
  });
});
