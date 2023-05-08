/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, fireEvent, waitFor } from "./jest.setup";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from "../components/products/searchProduct/searchInput";
import ViewSearch from "../pages/searchView";
import { noResultMock, searchMock } from "./mocks/search.mock";

describe("testing the search input component", () => {
  it("should view the search input", () => {
    const { getByTestId } = render(<SearchInput />);
    expect(getByTestId("search-input")).toBeInTheDocument();
    expect(getByTestId("button-search")).toBeInTheDocument();
  });
});

describe("should view the product view", () => {
  it("should view the search view page", () => {
    const { getByTestId } = render(<ViewSearch />);
    expect(getByTestId("price")).toBeInTheDocument();
    expect(getByTestId("category-search")).toBeInTheDocument();
    expect(getByTestId("expiryDate")).toBeInTheDocument();
    expect(getByTestId("sellerId")).toBeInTheDocument();
  });

  it("for successfull search of the product", async () => {
    render(<ViewSearch />, {
      preloadedState: { search: searchMock },
    });
    expect(await screen.findByText(/test product/i)).toBeInTheDocument();
  });

  it("should display the message of no match found", async () => {
    render(<ViewSearch />, {
      preloadedState: { search: noResultMock },
    });
    expect(await screen.findByText(/no match found/i)).toBeInTheDocument();
  });

  it("should mock the post search API", async () => {
    const { getByTestId } = render(<ViewSearch />);
    fireEvent.change(getByTestId("price"), { target: { value: "0-2000" } });
    expect(await screen.findByText(/Results/i)).toBeInTheDocument();
  });

  it("should search by expiry date", async () => {
    const { getByTestId } = render(<ViewSearch />);
    const expiryDate = getByTestId("expiryDate");
    fireEvent.change(expiryDate, { target: { value: "2060-10-01" } });
    expect(await screen.findByText(/Results/i)).toBeInTheDocument();
  });
});
