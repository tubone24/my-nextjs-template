import React from 'react'
import { render } from 'test/testUtils'
import HomePage from 'src/pages'
import { RecoilRoot } from 'recoil'

test('index snapshot?', () => {
  const { container } = render(
    <RecoilRoot>
      <HomePage />
    </RecoilRoot>
    )
  expect(container).toMatchSnapshot()
})
