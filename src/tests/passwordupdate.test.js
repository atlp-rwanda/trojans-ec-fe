/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, screen} from './jest.setup';
import '@testing-library/jest-dom';
import 'jest-environment-jsdom'
import instance from '../redux/axiosinstance';
import UpdatePassword from '../pages/updatepassword';

instance.put.mockResolvedValue({
    data: {
        message: "Password updated"
    }
})

describe("testing update password from", () =>{
    test("render form with input and button field", async() => {
        render(<UpdatePassword />);

        const oldPassword = screen.getByPlaceholderText('Enter old password');
        const newPassword = screen.getByPlaceholderText('Enter New password');
        const confirmPassword =screen.getByPlaceholderText('Confirm New password')
        const button = screen.getByRole('button',{name: /Update password/i});
        expect(oldPassword).toBeInTheDocument();
        expect(newPassword).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
})