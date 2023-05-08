import React from "react";
import { render, screen } from "../../jest.setup";
import "@testing-library/jest-dom";
import PageDesign from "../../../components/shared/TwoFactorPageDesign"

it("render page design component", async () => {
    render(<PageDesign/>);
    expect(screen.getByTestId("logo-2fa")).toBeInTheDocument();
    expect(screen.getByTestId("circles-design")).toBeInTheDocument();
    expect(screen.getByTestId("vector-image-design")).toBeInTheDocument();
  });
