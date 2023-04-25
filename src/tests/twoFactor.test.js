import React from "react";
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import 'setimmediate';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import mockAxios from "../redux/axiosinstance";
import store from "../redux/store"
import AppRoutes from "../routes"
import { act } from "react-dom/test-utils";

beforeEach(async () => {
    act(() => {
        render(
            <Provider store={store}><Router><AppRoutes /></Router></Provider>
        );
      });

      jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
  });

describe('testing TwoFactorAuth component', ()=>{
    test('login as seller and navigate 2fa page', async ()=>{
        mockAxios.post.mockResolvedValue({ data: { status: 200, randomAuth: true, token: "some token string" } });
    
        const inputOne = screen.getByPlaceholderText("User Email");
        expect(inputOne).toBeInTheDocument();
        act(() => {
            fireEvent.change(inputOne, {
                target: {
                    value: "testSeller@example.com",
                }
            });
        })
        expect(inputOne.value).toBe("testSeller@example.com");

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

        await waitFor(() => expect(screen.getByTestId('two-factor-auth')).toBeInTheDocument());

        act(() => {
            jest.advanceTimersByTime(300000);
          });

        await waitFor(() => expect(screen.getByTestId('login')).toBeInTheDocument());
    })

    test('clicking on the try again link and navigate to login page', async ()=>{
        mockAxios.post.mockResolvedValue({ data: { status: 200, randomAuth: true, token: "some token string" } });
    
        const inputOne = screen.getByPlaceholderText("User Email");
        expect(inputOne).toBeInTheDocument();
        act(() => {
            fireEvent.change(inputOne, {
                target: {
                    value: "testSeller@example.com",
                }
            });
        })
        expect(inputOne.value).toBe("testSeller@example.com");

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

        await waitFor(() => expect(screen.getByTestId('two-factor-auth')).toBeInTheDocument());

        const linkToLoginEl = screen.getByRole("link", { name: /try again/i });
        expect(linkToLoginEl).toBeInTheDocument();
        act(() => {
        fireEvent.click(linkToLoginEl);
        })
        
        await waitFor(() => expect(screen.getByTestId('login')).toBeInTheDocument());
    })

    test('renders the logo', async ()=>{
        mockAxios.post.mockResolvedValue({ data: { status: 200, randomAuth: true, token: "some token string" } });
    
        const inputOne = screen.getByPlaceholderText("User Email");
        expect(inputOne).toBeInTheDocument();
        act(() => {
            fireEvent.change(inputOne, {
                target: {
                    value: "testSeller@example.com",
                }
            });
        })
        expect(inputOne.value).toBe("testSeller@example.com");

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

        await waitFor(() => expect(screen.getByTestId('two-factor-auth')).toBeInTheDocument());

        const logoElement = screen.getByTestId('logo-2fa');
        expect(logoElement).toBeInTheDocument();
    })
    
    test('renders vector component', ()=>{
        const vecElement = screen.getByTestId('logo-2fa');
        expect(vecElement).toBeInTheDocument();
    })

    test('renders TwoFactorForm component', ()=>{
        const gotItBtn = screen.getByRole("button", { name: "Got it" });
        act(() => {
            fireEvent.click(gotItBtn);
        })
        const twoFactorFormElement = screen.getByTestId('two-factor-form');
        expect(twoFactorFormElement).toBeInTheDocument();
    })

    describe("renders error messages", () => {
        test('render isRequired and length of five errors', ()=>{
            const buttonElmOne = screen.getByRole("button", { name: "Verify" });
            act(() => {
                fireEvent.submit(buttonElmOne);
              });
            const errorElmOne = screen.getByText(/Verification code is required/i);
            const errorElmTwo = screen.getByText(/Verification code must be exactly 5 numbers/i);
            expect(errorElmOne).toBeInTheDocument();
            expect(errorElmTwo).toBeInTheDocument();
        })

        test('render first digit must be zero error', ()=>{
            const otp1 = screen.getByPlaceholderText('1');
            act(() => {
                fireEvent.change(otp1, {
                    target: {
                        value: "0",
                    }
                });
            })
            const otp2 = screen.getByPlaceholderText('2');
            act(() => {
                fireEvent.change(otp2, {
                    target: {
                        value: "2",
                    }
                });
            })

            const otp3 = screen.getByPlaceholderText('3');
            act(() => {
                fireEvent.change(otp3, {
                    target: {
                        value: "3",
                    }
                });
            })

            const otp4 = screen.getByPlaceholderText('4');
            act(() => {
                fireEvent.change(otp4, {
                    target: {
                        value: "4",
                    }
                });
            })

            const otp5 = screen.getByPlaceholderText('5');
            act(() => {
                fireEvent.change(otp5, {
                    target: {
                        value: "4",
                    }
                });
            })
            const buttonElmOne = screen.getByRole("button", { name: "Verify" });
            act(() => {
                fireEvent.submit(buttonElmOne);
              });
            const errorElmOne = screen.getByText(/The first digit must be greater than 0/i);
            expect(errorElmOne).toBeInTheDocument();
        })

    })

    test('render loader', ()=>{
        mockAxios.post.mockRejectedValue({ response: { data: { status: 400, message: "invalid otp" } }});
        const otp1 = screen.getByPlaceholderText('1');
        act(() => {
            fireEvent.change(otp1, {
                target: {
                    value: "1",
                }
            });
        })

        const otp2 = screen.getByPlaceholderText('2');
        act(() => {
            fireEvent.change(otp2, {
                target: {
                    value: "2",
                }
            });
        })

        const otp3 = screen.getByPlaceholderText('3');
        act(() => {
            fireEvent.change(otp3, {
                target: {
                    value: "3",
                }
            });
        })

        const otp4 = screen.getByPlaceholderText('4');
        act(() => {
            fireEvent.change(otp4, {
                target: {
                    value: "4",
                }
            });
        })

        const otp5 = screen.getByPlaceholderText('5');
        act(() => {
            fireEvent.change(otp5, {
                target: {
                    value: "4",
                }
            });
        })
        const buttonElmOne = screen.getByRole("button", { name: "Verify" });
        act(() => {
            fireEvent.submit(buttonElmOne);
          });
        const loaderElm = screen.getByTestId("loader-2fa");
        expect(loaderElm).toBeInTheDocument();
    })

    test('render fail message if fails to make a request', async ()=>{
        mockAxios.post.mockRejectedValue( { message: "Network error!" });
        localStorage.setItem("userAuth", JSON.stringify("some token to test"));
        const okBtn = screen.getByRole("button", { name: "ok" });
        act(() => {
            fireEvent.click(okBtn);
        })

        const otp1 = screen.getByPlaceholderText('1');
        act(() => {
            fireEvent.change(otp1, {
                target: {
                    value: "1",
                }
            });
        })

        const otp2 = screen.getByPlaceholderText('2');
        act(() => {
            fireEvent.change(otp2, {
                target: {
                    value: "2",
                }
            });
        })

        const otp3 = screen.getByPlaceholderText('3');
        act(() => {
            fireEvent.change(otp3, {
                target: {
                    value: "3",
                }
            });
        })

        const otp4 = screen.getByPlaceholderText('4');
        act(() => {
            fireEvent.change(otp4, {
                target: {
                    value: "4",
                }
            });
        })

        const otp5 = screen.getByPlaceholderText('5');
        act(() => {
            fireEvent.change(otp5, {
                target: {
                    value: "4",
                }
            });
        })

        const buttonElmOne = screen.getByRole("button", { name: "Verify" });
        act(() => {
            fireEvent.submit(buttonElmOne);
          });

        await waitFor(() => expect(screen.getByText(/Network error!/i)).toBeInTheDocument(), {timeout: 2000});
    })
    
    test('render fail message if no two factor token', async ()=>{
        // mockAxios.post.mockRejectedValue( { message: "Network error!" });
        localStorage.removeItem("userAuth");
        const okBtn = screen.getByRole("button", { name: "ok" });
        act(() => {
            fireEvent.click(okBtn);
        })

        const otp1 = screen.getByPlaceholderText('1');
        act(() => {
            fireEvent.change(otp1, {
                target: {
                    value: "1",
                }
            });
        })

        const otp2 = screen.getByPlaceholderText('2');
        act(() => {
            fireEvent.change(otp2, {
                target: {
                    value: "2",
                }
            });
        })

        const otp3 = screen.getByPlaceholderText('3');
        act(() => {
            fireEvent.change(otp3, {
                target: {
                    value: "3",
                }
            });
        })

        const otp4 = screen.getByPlaceholderText('4');
        act(() => {
            fireEvent.change(otp4, {
                target: {
                    value: "4",
                }
            });
        })

        const otp5 = screen.getByPlaceholderText('5');
        act(() => {
            fireEvent.change(otp5, {
                target: {
                    value: "4",
                }
            });
        })

        const buttonElmOne = screen.getByRole("button", { name: "Verify" });
        act(() => {
            fireEvent.submit(buttonElmOne);
          });

        await waitFor(() => expect(screen.getByText(/Please login first!/i)).toBeInTheDocument(), {timeout: 2000});
    })

    test('500 response from the server', async ()=>{
        mockAxios.post.mockRejectedValue({ response: { data: { status: 500, message: "server error or otp expired" } }});
        localStorage.setItem("userAuth", JSON.stringify("some token to test"));
        const okBtn = screen.getByRole("button", { name: "ok" });
        act(() => {
            fireEvent.click(okBtn);
        })

        const otp1 = screen.getByPlaceholderText('1');
        act(() => {
            fireEvent.change(otp1, {
                target: {
                    value: "1",
                }
            });
        })

        const otp2 = screen.getByPlaceholderText('2');
        act(() => {
            fireEvent.change(otp2, {
                target: {
                    value: "2",
                }
            });
        })

        const otp3 = screen.getByPlaceholderText('3');
        act(() => {
            fireEvent.change(otp3, {
                target: {
                    value: "3",
                }
            });
        })

        const otp4 = screen.getByPlaceholderText('4');
        act(() => {
            fireEvent.change(otp4, {
                target: {
                    value: "4",
                }
            });
        })

        const otp5 = screen.getByPlaceholderText('5');
        act(() => {
            fireEvent.change(otp5, {
                target: {
                    value: "4",
                }
            });
        })

        const buttonElmOne = screen.getByRole("button", { name: "Verify" });
        act(() => {
            fireEvent.submit(buttonElmOne);
          });
        await waitFor(() => expect(screen.getByText(/An error occurred while trying to verify your account. Please try again later./i)).toBeInTheDocument(), {timeout: 2000});
    })

    test('testing otp send request', async ()=>{
        mockAxios.post.mockResolvedValue({ data: { status: 200, token: "some token string" } });
        const okBtn = screen.getByRole("button", { name: "ok" });
        act(() => {
            fireEvent.click(okBtn);
        })

        localStorage.setItem("userAuth", JSON.stringify("some token to test"));
        const otp1 = screen.getByPlaceholderText('1');
        act(() => {
            fireEvent.change(otp1, {
                target: {
                    value: "1",
                }
            });
        })

        const otp2 = screen.getByPlaceholderText('2');
        act(() => {
            fireEvent.change(otp2, {
                target: {
                    value: "2",
                }
            });
        })

        const otp3 = screen.getByPlaceholderText('3');
        act(() => {
            fireEvent.change(otp3, {
                target: {
                    value: "3",
                }
            });
        })

        const otp4 = screen.getByPlaceholderText('4');
        act(() => {
            fireEvent.change(otp4, {
                target: {
                    value: "4",
                }
            });
        })

        const otp5 = screen.getByPlaceholderText('5');
        act(() => {
            fireEvent.change(otp5, {
                target: {
                    value: "4",
                }
            });
        })
        const buttonElmOne = screen.getByRole("button", { name: "Verify" });
        act(() => {
            fireEvent.submit(buttonElmOne);
          });
        await waitForElementToBeRemoved(() => screen.queryByTestId("loader-2fa"));
        expect(mockAxios.post).toHaveBeenCalled();
    })

});


