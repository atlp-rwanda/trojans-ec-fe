import React from "react";
import { render, fireEvent,screen, waitFor } from './jest.setup';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import Login from "../pages/login";
import mockAxios from "../redux/axiosinstance";
import { act } from "react-dom/test-utils";

test('sample test for home page', () => {
  render(<Login />)
  const homeElement = screen.getByTestId('login')
  expect(homeElement).toBeInTheDocument()
})

test('login as a buyer and navigate home page', async ()=>{
    render(<Login/>);
    mockAxios.post.mockResolvedValue({ data: { status: 200, token: "some token string" } });


    act(() => {
        fireEvent.submit(screen.getByRole("button", { name: /Login/i }));
    });
    await waitFor(() => expect(screen.getByText(/email is a required field/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/password is a required field/i)).toBeInTheDocument());

    const inputOne = screen.getByPlaceholderText("User Email");
    expect(inputOne).toBeInTheDocument();
    act(() => {
        fireEvent.change(inputOne, {
            target: {
                value: "testBuyer@example.com",
            }
        });
    })
    expect(inputOne.value).toBe("testBuyer@example.com");

    const inputTwo = screen.getByPlaceholderText("User Password");
    expect(inputTwo).toBeInTheDocument();
    act(() => {
        fireEvent.change(inputTwo, {
            target: {
                value: "passwordExample",
            }
        });
    })
    expect(inputTwo.value).toBe("passwordExample");

    const submitBtnEl = screen.getByRole("button", { name: /Login/i });
    expect(submitBtnEl).toBeInTheDocument();
    act(() => {
        fireEvent.submit(submitBtnEl);
      });

    await waitFor(() => expect(screen.getByTestId("loader-2fa")).toBeInTheDocument());
})