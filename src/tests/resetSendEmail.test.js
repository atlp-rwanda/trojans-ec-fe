import React from 'react'
import { render, screen } from './jest.setup'
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import SendEmail from '../pages/password/sendEmail'

test('sample test for home page', () => {
  render(<SendEmail />)
  const resPass = screen.getByTestId('emailSent')
  expect(resPass).toBeInTheDocument()
})
