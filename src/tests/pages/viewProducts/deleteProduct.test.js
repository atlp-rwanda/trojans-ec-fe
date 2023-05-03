import React from "react";
import "setimmediate";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import "jest-environment-jsdom";
import mockAxios from "../../../redux/axiosinstance";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "../../jest.setup";
import { products } from "../../mocks/product.mock";
import { categories } from "../../mocks/categories.mock";
import { userToken } from "../../mocks/user.mock";
import { productState } from "../../mocks/product.mock";
import SellerProducts from "../../../pages/dashboard/seller/SellerProducts";

mockAxios.delete.mockResolvedValue({ data: { message: "Product deleted" } });
mockAxios.get.mockImplementation((url) => {
  switch (url) {
    case "/categories":
      return Promise.resolve({ data: { status: 200, categories } });
    case "/products":
      return Promise.resolve({ data: { status: 200, products } });
    default:
      return Promise.reject(new Error("Not found"));
  }
});

test("testing deleting a product", async () => {
  localStorage.setItem("token", userToken);
  act(() =>
    render(<SellerProducts noSidebar={true} />, {
      preloadedState: {
        product: productState,
      },
    })
  );

  await waitFor(() =>
    expect(screen.queryByText(/All Products/i)).toBeInTheDocument()
  );

  const deleteIcon = screen.getByTestId(/delete-2/i);
  expect(deleteIcon).toBeInTheDocument();

  act(() => {
    fireEvent.click(deleteIcon);
  });
  const comfirmPopup = await screen.findByTestId(/comfirm-delete-popup/i);
  expect(comfirmPopup).toBeInTheDocument();

  const cancelBtn = screen.getByRole("button", { name: /No/i });
  act(() => {
    fireEvent.click(cancelBtn);
  });
  await waitFor(() =>
    expect(screen.queryByText(/All Products/i)).toBeInTheDocument()
  );

  const deleteIconTwo = screen.getByTestId(/delete-2/i);
  expect(deleteIconTwo).toBeInTheDocument();

  act(() => {
    fireEvent.click(deleteIconTwo);
  });
  const comfirmPopupTwo = await screen.findByTestId(/comfirm-delete-popup/i);
  expect(comfirmPopupTwo).toBeInTheDocument();
  const deleteBtn = screen.getByRole("button", { name: /Yes/i });
  act(() => {
    fireEvent.click(deleteBtn);
  });
  await waitFor(() =>
    expect(screen.queryByTestId("loader-2fa")).toBeInTheDocument()
  );
  // await waitFor(() =>
  //   expect(screen.queryByText(/Product deleted/i)).toBeInTheDocument()
  // );
  await waitFor(() =>
    expect(screen.queryByText(/No products yet/i)).toBeInTheDocument()
  );
});
