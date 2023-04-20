import React from "react";
import { render, screen } from "./jest.setup";
import "@testing-library/jest-dom";
import "jest-environment-jsdom";
import ResetPasswd from "../pages/password/passwd-reset";

test("sample test for home page", () => {
  render(<ResetPasswd />);
  const resPass = screen.getByTestId("resetPassword");
  expect(resPass).toBeInTheDocument();
});
