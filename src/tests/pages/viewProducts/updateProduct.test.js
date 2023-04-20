
import React from "react";
import 'setimmediate';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import mockAxios from "../../../redux/axiosinstance";
import { productState } from "../../mocks/product.mock";
import AllProducts from "../../../pages/dashboard/seller/AllProducts/allProducts";
import {
    render,
    screen,
    fireEvent,
    waitFor,
} from '../../jest.setup';
import { products, updatedProduct } from "../../mocks/product.mock"
import { categories } from "../../mocks/categories.mock"
import userEvent from "@testing-library/user-event";
import { mockFile } from "../../mocks/file.mock";
import { userToken } from "../../mocks/user.mock"

URL.createObjectURL = jest.fn(() => "mock-url");

mockAxios.put.mockResolvedValue({ data: { status: 200, message: "Product updated", data: updatedProduct } });
mockAxios.get.mockImplementation(url => {
  switch(url){
      case "/categories":
          return Promise.resolve({data: { status: 200, categories } })
      case "/products":
          return Promise.resolve({data: { status: 200, products } })
      default:
          return Promise.reject(new Error("Not found"))

  }
})

test('testing updating a product', async ()=>{
    localStorage.setItem("token", userToken);
    act(() => {
        render(<AllProducts />, {
            preloadedState: {
              product: productState,
            },
          });
      });
      
    await waitFor(() => expect(screen.queryByText(/All Products/i)).toBeInTheDocument());

    const editIcon = screen.getByTestId(/edit-2/i);
    expect(editIcon).toBeInTheDocument();

    act(() => fireEvent.click(editIcon));
    
    await waitFor(() => expect(screen.getByTestId("update-product-form")).toBeInTheDocument());
    const formDiv = screen.getByTestId("update-product-form");
    
    const cancelBtnOne = screen.getByRole("button", { name: /Cancel/i});
    
    act(() => fireEvent.click(cancelBtnOne));
    expect(formDiv).not.toBeInTheDocument();
    
    act(() => fireEvent.click(screen.getByTestId(/edit-2/i)));
    await waitFor(() => expect(screen.getByTestId("update-product-form")).toBeInTheDocument());

    const productNameInput = screen.getByTestId("update-name");
    expect(productNameInput.value).toBe("nike airforce");

    act(() => {
        fireEvent.change(productNameInput, {
            target: {
                value: "Snikers",
            }
        });
    })
    
    const productPriceInput = screen.getByTestId("update-price");
    expect(productPriceInput.value).toBe("2500");

    act(() => {
        fireEvent.change(productPriceInput, {
            target: {
                value: "27",
            }
        });
    })
    
    const productSelectInput = screen.getByTestId("update-category");
    expect(productSelectInput.value).toBe("1");
    
    const productQuantityInput = screen.getByTestId("update-quantity");
    expect(productQuantityInput.value).toBe("20");
    
    act(() => {
        fireEvent.input(productQuantityInput, {
            target: {
                value: "79ut",
            }
        });
    })
    
    const nextBtn = screen.getByRole("button", {name:/Next/i});
    expect(nextBtn).toBeInTheDocument();
    
    act(() => fireEvent.click(nextBtn));

    expect(await screen.findByText(/Quantity must be a number/i)).toBeInTheDocument();

    const productQuantityInputTwo = screen.getByTestId("update-quantity");
    act(() => {
        fireEvent.input(productQuantityInputTwo, {
            target: {
                value: "79",
            }
        });
    })
    
    const nextBtnTwo = screen.getByRole("button", {name:/Next/i});
    expect(nextBtnTwo).toBeInTheDocument();
    
    act(() => fireEvent.click(nextBtnTwo));

    await waitFor(() => expect(screen.getByText(/Expiry Date/i)).toBeInTheDocument());

    const prevBtn = screen.getByRole("button", {name:/Prev/i});
    expect(prevBtn).toBeInTheDocument();
    
    act(() => fireEvent.click(prevBtn));

    const productNameInputThree = screen.getByTestId("update-name");
    expect(productNameInputThree).toBeInTheDocument();

    const nextBtnThree = screen.getByRole("button", {name:/Next/i});
    expect(nextBtnThree).toBeInTheDocument();
    
    act(() => fireEvent.click(nextBtnThree));

    await waitFor(() => expect(screen.getByText(/Expiry Date/i)).toBeInTheDocument());
    
    const productExpDateInput = screen.getByTestId("update-exp-date");
    fireEvent.change(productExpDateInput, { target: { value: "2026-12-31" } });

    const bonus = await screen.findByTestId("update-bonus");
    fireEvent.input(bonus, { target: { value: "200" } });

    const imageIndexThree = await screen.findByTestId("image-card-3");
    expect(imageIndexThree).toBeInTheDocument();
    act(() => fireEvent.mouseEnter(imageIndexThree));
    const crossIcon = await screen.findByTestId("remove-3");
    expect(crossIcon).toBeInTheDocument();
   
    const image = await screen.findByTestId("update-upload-input");
    const files = [];

    for (let i = 0; i < 4; i++) {
      files.push(mockFile);
    }

    await userEvent.upload(image, files);

    expect(URL.createObjectURL).toHaveBeenCalledTimes(4);

    const submitBtnTwo = screen.getByRole("button", {name:/Update/i});
    act(() => fireEvent.submit(submitBtnTwo));

    await waitFor(() => expect(screen.queryByTestId("update-loader")).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Product updated/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId(/edit-2/i)).toBeInTheDocument());
})
