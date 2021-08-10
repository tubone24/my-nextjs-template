import { render } from 'test/testUtils'
import GridList from 'src/components/gridList'
import * as React from 'react'

describe('GridList', () => {
  it('Snapshot Test', () => {
    const { container } = render(<GridList />)
    expect(container).toMatchSnapshot()
  })
})
