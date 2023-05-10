import DisableAccount from '../pages/disableAccount'
import React from 'react'
import store from '../redux/store'
// import { loginThunk } from '../redux/features/actions/userLogin'
import { render, screen } from './jest.setup'
import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import instance from '../redux/axiosinstance'
import { Users } from './mocks/users.mock'
import { act } from 'react-dom/test-utils'
import usersThunk from '../redux/features/actions/users'
instance.get.mockResolvedValue({
  data: {
    users: Users,
  },
})
instance.post.mockResolvedValue({
  data: {
    status: 200,
    message: 'User was successfully deactivated',
  },
  id: 8,
})
describe('Admin disable/enable accounts', () => {
  test('testing the render', () => {
    render(<DisableAccount />)
    const accountDisable = screen.getByTestId('disable-list')
    expect(accountDisable).toBeInTheDocument()
  })
})
/* istanbul ignore next */
describe('test user state', () => {
  test('dispatch', async () => {
    await act(async () => {
      store.dispatch(usersThunk())
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })
    const { loading } = store.getState().users
    expect( loading ).toBe(false)
  })
})
