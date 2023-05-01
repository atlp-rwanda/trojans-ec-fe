import { act, fireEvent, render, screen } from '../jest.setup'
import '@testing-library/jest-dom'
import React from 'react'
import 'jest-environment-jsdom'
import UpdateStatusButton from '../../components/updatestatus'
import axios from '../../redux/axiosinstance'
import store from '../../redux/store'
import { getUsersThunk } from '../../redux/features/actions/user'
const user = {
  id: 10,
  status: 'active',
}
jest.mock('axios')

describe('testing disable button', () => {
  beforeAll(() => {
    axios.get.mockResolvedValue({
      data: {
        users: [
          {
            id: 10,
            status: 'active',
          },
          {
            id: 200,
            status: 'active',
          },
        ],
      },
      status: 200,
    })
    store.dispatch(getUsersThunk())
  })
  test('rendering', async () => {
    axios.post.mockResolvedValue({
      data: {
        status: 200,
        message: 'User was successfully deactivated',
      },
    })
    render(<UpdateStatusButton user={user} />)
    const button = screen.getByTestId('disable-button')

    await act(async () => {
      await fireEvent.click(button)
    })

    expect(axios.post).toHaveBeenCalled()
  })
})
