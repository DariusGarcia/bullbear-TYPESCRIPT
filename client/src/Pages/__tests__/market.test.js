import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import Landing from '../Landing'
import { AuthContext } from '../../Context/AuthContext'

test('should render landing page component', () => {
  render(
    <AuthContext>
      <Landing />
    </AuthContext>
  )
  const landingElement = screen.getByTestId('landing')
  expect(landingElement).toBeInTheDocument()
})
