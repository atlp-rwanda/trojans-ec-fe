/* eslint-disable jest/no-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
import React from "react";
import { render, screen, fireEvent, waitFor } from "./jest.setup";
import Product from "../components/addProduct/addProduct";
import "@testing-library/jest-dom/extend-expect";
import { category } from "./mocks/categories.mock";
import configureMockStore from "redux-mock-store";
import { product } from "./mocks/product.mock";
import userEvent from "@testing-library/user-event";
import { mockFile } from "./mocks/file.mock";
import SendSuccessfull from "../components/sendSuccess";
import AddProduct from "../pages/dashboard/seller/addProduct";

URL.createObjectURL = jest.fn(() => "mock-url");

describe("Product", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    cat: category,
    product: product,
  });
  it("should render all first form inputs", async () => {
    const { getByPlaceholderText, getByRole } = render(<Product />);
    const nextButton = getByRole("button", { name: /Next/i });
    fireEvent.submit(nextButton);

    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(getByPlaceholderText("Name of the product")).toBeInTheDocument();
    expect(getByPlaceholderText("Price of the product")).toBeInTheDocument();
  });

  it("should show an error when the inputs are empty", async () => {
    const { getByRole } = render(<Product />);
    const nextButton = getByRole("button", { name: /Next/i });
    fireEvent.submit(nextButton);
    const productNameError = await screen.findByText(/name can't be empty/i);
    const priceError = await screen.findByText(/Price can't be empty/i);
    expect(productNameError).toBeInTheDocument();
    expect(priceError).toBeInTheDocument();
  });

  it("should input the text and go to the next page", async () => {
    const { getByTestId } = render(<Product />, {
      preloadedState: {
        cat: category,
      },
    });

    fireEvent.input(getByTestId("name"), {
      target: {
        value: "iphone 14",
      },
    });
    fireEvent.input(getByTestId("price"), {
      target: {
        value: "1099",
      },
    });
    const selectElement = getByTestId("categoryId");
    fireEvent.change(selectElement, { target: { value: "1" } });
    fireEvent.input(getByTestId("quantity"), {
      target: {
        value: "20",
      },
    });

    fireEvent.click(getByTestId("submit-first-form"));

    expect(await screen.findByText(/Expiry Date/i)).toBeInTheDocument();
  });
  it("should throw error", async () => {
    const { getByTestId } = render(<Product />, {
      preloadedState: {
        cat: category,
      },
    });

    fireEvent.input(getByTestId("name"), {
      target: {
        value: "iphone 14",
      },
    });
    fireEvent.input(getByTestId("price"), {
      target: {
        value: "1099",
      },
    });

    fireEvent.change(getByTestId("categoryId"), {
      target: {
        value: 1,
      },
    });
    fireEvent.input(getByTestId("quantity"), {
      target: {
        value: "20",
      },
    });

    fireEvent.click(getByTestId("submit-first-form"));

    const submitClick = await screen.findByTestId("submit-second-form");

    fireEvent.click(submitClick);
    expect(
      await screen.findByText(/this field is required/i)
    ).toBeInTheDocument();
  });

  it("should provide inputs for the second form", async () => {
    const { getByTestId } = render(<Product />, {
      preloadedState: {
        cat: category,
        prod: product,
      },
    });

    fireEvent.input(getByTestId("name"), {
      target: {
        value: "iphone 14",
      },
    });
    fireEvent.input(getByTestId("price"), {
      target: {
        value: "1099",
      },
    });

    fireEvent.change(getByTestId("categoryId"), {
      target: {
        value: 1,
      },
    });
    fireEvent.input(getByTestId("quantity"), {
      target: {
        value: "20",
      },
    });

    fireEvent.click(getByTestId("submit-first-form"));
    const submitClick = await screen.findByTestId("submit-second-form");
    const expiryDate = await screen.findByTestId("expiryDate");
    const bonus = await screen.findByTestId("bonus");
    const image = await screen.findByLabelText("image-upload");
    const files = [];

    for (let i = 0; i <= 5; i++) {
      files.push(mockFile);
    }

    console.log(mockFile);
    fireEvent.change(expiryDate, { target: { value: "2060-10-01" } });
    fireEvent.input(bonus, { target: { value: "200" } });
    await userEvent.upload(image, files);
    fireEvent.click(submitClick);

    expect(await screen.findByText(/processing/i)).toBeInTheDocument();
  });
});

describe("testing sent successfull", () => {
  it("should contain a thank you message", async () => {
    render(<SendSuccessfull />);

    expect(await screen.findByText(/Thank You!/i)).toBeInTheDocument();
  });
  describe("should test the product Page", () => {
    it("should render the product page", async () => {
      const token = "my-test-token";
      jest.spyOn(window.localStorage, "getItem").mockReturnValue(token);
      render(<AddProduct />);
      expect(localStorage.getItem).toHaveBeenCalledWith("token");
      expect(await screen.findByText(/Add A Product/i)).toBeInTheDocument();
    });
  });
});
