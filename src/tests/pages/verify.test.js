import React from 'react';
import { render, waitFor, act } from '../jest.setup';
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import instance from "../../redux/axiosinstance";
import VerifyEmail from '../../pages/verifyEmail.js';

jest.mock('axios');

describe('verifyEmail', () => {
  it('displays loading spinner while fetching data', async () => {
    const mockedResponse = { data: { response: { status: true, message: 'Verification successful' } } };
    instance.get.mockResolvedValue(mockedResponse);

    const { getByText } = render(<VerifyEmail />);

    expect(getByText('Processing...')).toBeInTheDocument();

    // await waitFor(() => expect(instance.get).toHaveBeenCalled());
  });

//   it('displays success popup on successful verification', async () => {
//     const mockedResponse = { data: { response: { status: true, message: 'Verification successful' } } };
//     instance.get.mockResolvedValue(mockedResponse);

//     const { getByText } = render(<VerifyEmail />);

//     await waitFor(() => expect(getByText('Verification successful')).toBeInTheDocument());
//   });

//   it('displays failure popup on failed verification', async () => {
//     const mockedResponse = { response: { data: { message: 'Verification failed' } } };
//     axios.get.mockRejectedValue(mockedResponse);

//     const { getByText } = render(<VerifyEmail />);

//     await waitFor(() => expect(getByText('Verification failed')).toBeInTheDocument());
//   });
});
