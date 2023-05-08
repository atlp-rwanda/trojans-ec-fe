/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import 'setimmediate';
import { render, fireEvent,screen, waitFor } from '../jest.setup';
import "@testing-library/jest-dom";
import SignUp from '../../pages/signUp';
import mockAxiosInstance from '../../redux/axiosinstance';
import { act } from "react-dom/test-utils";
import { products } from "../mocks/product.mock";
import { categories } from "../mocks/categories.mock";
import { signUpState } from '../mocks/user.mock.js';

beforeEach(()=> {
  localStorage.setItem("token", "some string as token");
})

describe('Details component', () => {
  it('should render all form inputs', async () => {
    const { getByPlaceholderText, getByRole, getByTestId } =  render(<SignUp />);
     const submitButton = getByRole('button', { name: /next/i });
     fireEvent.click(submitButton);
 
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(getByPlaceholderText('ENTER YOUR USERNAME')).toBeInTheDocument();
    expect(getByPlaceholderText('ENTER YOUR EMAIL')).toBeInTheDocument();
    expect(getByPlaceholderText('ENTER YOUR PASSWORD')).toBeInTheDocument();
    expect(getByPlaceholderText('RE-ENTER YOUR PASSWORD')).toBeInTheDocument();
    expect(getByTestId('gender')).toBeInTheDocument();
    expect(getByTestId('language')).toBeInTheDocument();
    expect(getByTestId('currency')).toBeInTheDocument();
  });

  test('form should show error when inputs are empty', async () => {
    render(<SignUp />);
    const submitButton = screen.getByRole('button', { name: /NEXT/i });
    fireEvent.click(submitButton);

    const usernameError = await screen.findByText(/names is a required field/i);
    const emailError = await screen.findByText(/email is a required field/i);
    const passwordError = await screen.findByText("password is a required field");
    const cpasswordError = await screen.findByText("Comfirm password is a required field");
    const genderError = await screen.findByText(/gender is a required field/i);
    const dobError = await screen.findByText(/Date of birth is a required fiel/i);
    const languageError = await screen.findByText(/languange is a required field/i);
    const currencyError = await screen.findByText(/currency is a required field/i);

    expect(usernameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(cpasswordError).toBeInTheDocument();
    expect(genderError).toBeInTheDocument();
    expect(dobError).toBeInTheDocument();
    expect(languageError).toBeInTheDocument();
    expect(currencyError).toBeInTheDocument();
  });
});

test('testing registration functionalities', async () => {
    mockAxiosInstance.post.mockResolvedValue({data: { status: 201, message: "success" } });
    act(() => render(<SignUp />, {
      preloadedState: {
        signUp: signUpState,
      },
    }) );

  await waitFor(()=> expect(screen.queryByTestId("signup-page")).toBeInTheDocument());
  const username = screen.getByPlaceholderText('ENTER YOUR USERNAME');
  const email = screen.getByPlaceholderText('ENTER YOUR EMAIL');
  const password = screen.getByPlaceholderText('ENTER YOUR PASSWORD');
  const cpassword = screen.getByPlaceholderText('RE-ENTER YOUR PASSWORD');
  const gender = screen.getByTestId('gender');
  const dob = screen.getByTestId("date-input");
  const language = screen.getByTestId('language');
  const currency = screen.getByTestId('currency');

  act(() => {
    fireEvent.change(username, {
        target: {
            value: "my name",
        }
    });
});
expect(username.value).toBe("my name");

act(() => {
  fireEvent.change(email, {
      target: {
          value: "testSeller@example.com",
      }
  });
});
expect(email.value).toBe("testSeller@example.com");

act(() => {
  fireEvent.change(password, {
    target: {
      value: "password1",
    }
  });
})
expect(password.value).toBe("password1");

act(() => {
  fireEvent.change(cpassword, {
    target: {
      value: "password1",
    }
  });
})
expect(cpassword.value).toBe("password1");

act(() => {
  fireEvent.change(gender, {
    target: {
      value: "Male",
    }
  });
})
expect(gender.value).toBe("Male");

act(() => {
  fireEvent.change(dob, {
    target: {
      value: "2000-12-31",
    }
  });
})
expect(dob.value).toBe("2000-12-31");

act(() => {
  fireEvent.change(language, {
    target: {
      value: "english",
    }
  });
})
expect(language.value).toBe("english");

act(() => {
  fireEvent.change(currency, {
    target: {
      value: "usd",
    }
  });
})
expect(currency.value).toBe("usd");

const nextButton = screen.getByRole('button', { name: /NEXT/i });
expect(nextButton).toBeInTheDocument();
act(() => fireEvent.click(nextButton));
  await waitFor(() => expect(screen.getByPlaceholderText(/COUNTRY/i)).toBeInTheDocument());
  
  act(() => fireEvent.click(screen.getByTestId('back-first-page')));
  await waitFor(() => expect(screen.getByRole('button', { name: /NEXT/i })).toBeInTheDocument());
  
  act(() => fireEvent.click(screen.getByRole('button', { name: /NEXT/i })));
  await waitFor(() => expect(screen.getByPlaceholderText(/COUNTRY/i)).toBeInTheDocument());

  act(() => fireEvent.click(screen.getByTestId('back-first-image')));
  await waitFor(() => expect(screen.getByRole('button', { name: /NEXT/i })).toBeInTheDocument());
  
  act(() => fireEvent.click(screen.getByRole('button', { name: /NEXT/i })));
  await waitFor(() => expect(screen.getByPlaceholderText(/COUNTRY/i)).toBeInTheDocument());

  act(() => fireEvent.submit(screen.getByRole('button', { name: /SIGN UP/i })))

  const countryError = await screen.findByText(/country is a required field/i);
  const cityError = await screen.findByText(/city is a required field/i);
  const provinceError = await screen.findByText(/province is a required field/);
  const streetError = await screen.findByText(/street is a required field/);
  const postalCodeError = await screen.findByText(/postalcode is a required field/);

  expect(postalCodeError).toBeInTheDocument();
  expect(streetError).toBeInTheDocument();
  expect(provinceError).toBeInTheDocument();
  expect(cityError).toBeInTheDocument();
  expect(countryError).toBeInTheDocument();

  const city = screen.getByPlaceholderText(/CITY/i);
  const postalcode = screen.getByPlaceholderText(/POSTAL CODE/i);
  const street = screen.getByPlaceholderText(/STREET/i);
  const province = screen.getByPlaceholderText(/PROVINCE/i);
  const country = screen.getByPlaceholderText(/COUNTRY/i);

  act(() => {
    fireEvent.change(city, {
      target: {
        value: "Kigali",
      }
    });
  })
  act(() => {
    fireEvent.change(postalcode, {
      target: {
        value: "12345",
      }
    });
  })
  act(() => {
    fireEvent.change(street, {
      target: {
        value: "KG 300 ST 23",
      }
    });
  })
  act(() => {
    fireEvent.change(province, {
      target: {
        value: "Kigali",
      }
    });
  })
  act(() => {
    fireEvent.change(country, {
      target: {
        value: "Rwanda",
      }
    });
  })
  act(() => fireEvent.submit(screen.getByRole('button', { name: /SIGN UP/i })))
  await waitFor(() => expect(screen.getByText(/Account created successfully/i)).toBeInTheDocument());
});
