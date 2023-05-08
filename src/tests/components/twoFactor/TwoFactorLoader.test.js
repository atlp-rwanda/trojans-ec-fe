import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import Loader from "../../../components/shared/TwoFactorLoader";

it("render page TwoFactor form with all inputs component", async () => {
    render(<Loader/>);
    expect(screen.getByTestId("loader-2fa")).toBeInTheDocument();
  });
