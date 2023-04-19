import React from 'react'
// import { render, screen } from '../jest.setup'
import {
  render,
  fireEvent,
  waitFor,
  // eslint-disable-next-line no-unused-vars
  getByPlaceholderText,
  screen,
} from '../jest.setup'
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import ResetPasswd from '../../pages/password/passwd-reset'
import { act } from 'react-dom/test-utils'

import { useNavigate } from 'react-router-dom'
import { resetFail, resetMock } from '../mocks/reset.mock'
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))

describe('ResetPasswd', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<ResetPasswd />)
    const resetPasswordForm = getByTestId('resetPassword')
    expect(resetPasswordForm).toBeInTheDocument()
  })

  test('submits and resets', async () => {
    render(<ResetPasswd />)
    const newPasswordInput = screen.getByPlaceholderText(/NEW PASSWORD/i)
    const confirmPasswordInput = screen.getByPlaceholderText(
      /CONFIRM PASSWORD/i,
    )
    const submitButton = screen.getByRole('button', { name: /reset password/i })

    fireEvent.change(newPasswordInput, { target: { value: '' } })
    fireEvent.change(confirmPasswordInput, { target: { value: '' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(newPasswordInput.value).toBe('')
      expect(confirmPasswordInput.value).toBe('')
    })
  })

  test('error message if the password is not valid', async () => {
    render(<ResetPasswd />)
    const newPasswordInput = screen.getByPlaceholderText(/NEW PASSWORD/i)
    const confirmPasswordInput = screen.getByPlaceholderText(
      /CONFIRM PASSWORD/i,
    )
    const submitButton = screen.getByRole('button', { name: /Reset Password/i })
    act(() => {
      fireEvent.change(newPasswordInput, { target: { value: ' ' } })
      fireEvent.change(confirmPasswordInput, { target: { value: '' } })
      fireEvent.click(submitButton)
    })
    act(() => {
      fireEvent.submit(submitButton)
    })
    await waitFor(() =>
      expect(
        screen.getByText(/Password length should be at least 8 characters/i),
      ).toBeInTheDocument(),
    )
  })

  test('success message and to login page after resetting', async () => {
    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)
    render(<ResetPasswd />, {
      preloadedState: {
        resetPass: resetMock,
      },
    })
    expect(await screen.findByText(/Password Changed !/i)).toBeInTheDocument()
  })
  test('error occured', async () => {
    render(<ResetPasswd />, {
      preloadedState: {
        resetPass: resetFail,
      },
    })
    expect(await screen.findByText(/Session Has Expired!/i)).toBeInTheDocument()
  })

  test('form submission', async () => {
    render(<ResetPasswd />)
    const newPasswordInput = screen.getByPlaceholderText(/NEW PASSWORD/i)
    const confirmPasswordInput = screen.getByPlaceholderText(
      /CONFIRM PASSWORD/i,
    )
    const submitButton = screen.getByRole('button', { name: /reset password/i })

    fireEvent.change(newPasswordInput, { target: { value: 'qwerty123' } })
    fireEvent.change(confirmPasswordInput, { target: { value: 'qwerty123' } })
    

    await waitFor(() => {
      expect(newPasswordInput.value).toBe('qwerty123')
      expect(confirmPasswordInput.value).toBe('qwerty123')
    })
    fireEvent.click(submitButton)
  })
})
