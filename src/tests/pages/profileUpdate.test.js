/* eslint-disable jest/expect-expect */
import React from "react";
import "setimmediate";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "../jest.setup.js";
import "@testing-library/jest-dom";
import "jest-environment-jsdom";
import instance from "../../redux/axiosinstance.js";
import { User, userProfileState } from "../mocks/user.mock.js";
import ProfileUpdate from "../../pages/profileUpdate.js";
import { act } from "react-dom/test-utils";
import AppRoutes from "../../routes";
import { products } from "../mocks/product.mock";
import { categories } from "../mocks/categories.mock";

instance.get.mockResolvedValue({ data: { user: User } });

instance.patch.mockResolvedValue({
  data: {
    status: 200,
    message: "Updated successfully",
  },
});

describe("testing update form", () => {
  test("should render the form with input fields", async () => {
    act(() =>
      render(<ProfileUpdate />, {
        preloadedState: {
          userProfile: userProfileState,
        },
      })
    );
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    const countryInput = screen.getByPlaceholderText("Country");
    const cityInput = screen.getByPlaceholderText("City");
    const provinceInput = screen.getByPlaceholderText("Province");
    const streetInput = screen.getByPlaceholderText("Street");
    const postalCodeInput = screen.getByPlaceholderText("Postal Code");
    const currencyInput = screen.getByTestId("currency");
    const languageInput = screen.getByTestId("language");
    const form = screen.getByTestId("test-form");
    const button = screen.getByRole("button", { name: /UPDATE/i });
    const fileInput = screen.getByTestId("change-picture");
    expect(form).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(provinceInput).toBeInTheDocument();
    expect(streetInput).toBeInTheDocument();
    expect(postalCodeInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(languageInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();

    act(() => {
      fireEvent.change(countryInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(cityInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(provinceInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(languageInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(currencyInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(postalCodeInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => {
      fireEvent.change(streetInput, {
        target: {
          value: "",
        },
      });
    });
    act(() => fireEvent.click(button));

    expect(
      await screen.findByText(/country is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/city is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/province is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/street is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/postalCode is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/preferredCurrency is a required field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/preferredLanguage is a required field/i)
    ).toBeInTheDocument();
  });

  test("testig profile update functionalities", async () => {
    localStorage.setItem("token", "some string as token");
    act(() =>
      render(<ProfileUpdate />, {
        preloadedState: {
          userProfile: userProfileState,
        },
      })
    );

    await waitFor(() =>
      expect(screen.queryByTestId("profile")).toBeInTheDocument()
    );
    const button = screen.getByRole("button", { name: /UPDATE/i });
    act(() => fireEvent.click(button));
    await waitFor(() =>
      expect(screen.getByTestId("updateLoader")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Updated successfully/i)).toBeInTheDocument()
    );
    act(() => fireEvent.click(screen.getByRole("button", { name: /ok/i })));
    await waitFor(() =>
      expect(screen.getByText(/UPDATE PROFILE/i)).toBeInTheDocument()
    );
  });
});
