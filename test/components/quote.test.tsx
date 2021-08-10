import { render } from 'test/testUtils'
import WithLargeQuote from 'src/components/quote'
import * as React from 'react'

describe('Quote', () => {
  it('Snapshot Test', () => {
    const { container } = render(<WithLargeQuote />)
    expect(container).toMatchSnapshot()
  })
})
