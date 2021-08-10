import React from 'react'
import { render } from 'test/testUtils'
import GridList from 'src/components/gridList'

describe('GridList', () => {
  it('Snapshot Test', () => {
    const { container } = render(
      <GridList />
    )
    expect(container).toMatchSnapshot()
  })
})
