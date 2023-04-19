/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent, waitFor, screen } from '../jest.setup'
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import axios from 'axios'
import SendEmail from '../../pages/password/sendEmail'
import { act } from 'react-dom/test-utils'

jest.mock('axios', () => ({
  post: jest.fn(),
}))

describe('SendEmail component', () => {
  test('call password-reset-request with email when Send button is clicked', async () => {
    render(<SendEmail />)
    const emailInput = screen.getByPlaceholderText(/Email/i)
    const sendButton = screen.getByRole('button', { name: /Send/i })
    expect(emailInput).toBeInTheDocument()
    expect(sendButton).toBeInTheDocument()

   await act (async()=>{
      fireEvent.input(emailInput, { target: { value: 'nkezasuavis@gmail.com' } })
      fireEvent.click(sendButton)
      await new Promise((resolve) => setTimeout(resolve,3000));
    })
   
  })

  test('wrong inputs when Send button is clicked', async () => {
    render(<SendEmail />)
    const emailInput = screen.getByPlaceholderText(/Email/i)
    const sendButton = screen.getByRole('button', { name: /Send/i })
    expect(emailInput).toBeInTheDocument()
    expect(sendButton).toBeInTheDocument()

   await act (async()=>{
      fireEvent.input(emailInput, { target: { value: 'noreply@gmail.com' } })
      fireEvent.click(sendButton)
      await new Promise((resolve) => setTimeout(resolve,3000));
    })
   
  })


  test('email sent successfull', async () => {
    render(<SendEmail />, {
      preloadedState: {
        sendEmail: {
          loading: false,
          response: { status: 200 },
          error: null,
        },
      },
    })

    expect(await screen.findByText(/Ok/i)).toBeInTheDocument()
  })

  test('email not sent', async () => {
    render(<SendEmail />, {
      preloadedState: {
        sendEmail: {
          loading: false,
          response: {},
          error: { status: 403, message: 'email is not verified' },
        },
      },
    })

    expect(await screen.findByText(/Ok/i)).toBeInTheDocument()
  })

  
})
