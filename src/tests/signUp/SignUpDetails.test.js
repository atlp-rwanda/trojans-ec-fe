/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { render, fireEvent,screen } from '../jest.setup';
import "@testing-library/jest-dom";
import SignUp from '../../pages/signUp';

describe('Details component', () => {
  it('should render all form inputs', async () => {
    const { getByPlaceholderText, getByRole,getByTestId } =  render(<SignUp />);
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
    const cpasswordError = await screen.findByText(/cpassword is a required field/i);
    const genderError = await screen.findByText(/gender is a required field/i);
    const dobError = await screen.findByText(/dob is a required field/i);
    const languageError = await screen.findByText(/languange is a required field/i);

    expect(usernameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(cpasswordError).toBeInTheDocument();
    expect(genderError).toBeInTheDocument();
    expect(dobError).toBeInTheDocument();
    expect(languageError).toBeInTheDocument();
  });


});
