/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './jest.setup.js';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import instance from '../../redux/axiosinstance.js';
import { User } from '../mocks/user.mock.js';
import ProfileUpdate from '../../pages/profileUpdate.js';

instance.get.mockResolvedValue({
    data:{
        user: User
    } 
})

instance.patch.mockResolvedValue({
    data: {
        status: 200,
        message: 'Updated successfully'
    }
})

describe('testing update form', ()=>{
  test('should render the form with input fields', async() => {
    render(<ProfileUpdate />);
    await waitForElementToBeRemoved(()=> screen.queryByText('Loading...'))

    const countryInput = screen.getByPlaceholderText('Country');
    const cityInput = screen.getByPlaceholderText('City');
    const provinceInput = screen.getByPlaceholderText('Province');
    const streetInput = screen.getByPlaceholderText('Street');
    const postalCodeInput = screen.getByPlaceholderText('Postal Code');
    const currencyInput = screen.getByTestId('currency');
    const languageInput = screen.getByTestId('language');
    const form = screen.getByTestId('test-form')
    const button = screen.getByRole('button', {name: /UPDATE/i})
    expect(form).toBeInTheDocument();
    expect(countryInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(provinceInput).toBeInTheDocument();
    expect(streetInput).toBeInTheDocument();
    expect(postalCodeInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(languageInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();

});


})