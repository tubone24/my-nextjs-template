import React from 'react'
import { render } from 'test/testUtils'
import HomePage from 'src/pages'

test('index snapshot', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})
