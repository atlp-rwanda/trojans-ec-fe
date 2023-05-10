import AllUsers from '../../../pages/dashboard/admin/users/allUsers'
import React from 'react'
import 'setimmediate'
import { render, screen } from '../../jest.setup'
import '@testing-library/jest-dom'
import { getUsersState } from '../../mocks/users.mock'

describe('Testing admin main component', () => {
  it('should render admin', () => {
    render(<AllUsers />, {
      preloadedState: {
        users: getUsersState,
      },
    })
    expect(screen.getByText('Admin')).toBeInTheDocument()
  })
})
