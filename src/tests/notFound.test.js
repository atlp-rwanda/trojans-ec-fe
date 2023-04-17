import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import NotFound from "../pages/notFound"

test('renders not found page', () => {
  render(<NotFound/>);
  const notFoundElement = screen.getByText(/page not found/i);
  expect(notFoundElement).toBeInTheDocument();
});
