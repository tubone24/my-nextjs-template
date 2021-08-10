import { render } from 'test/testUtils'
import WithSpeechBubbles from 'src/components/speechBubble'
import * as React from 'react'

describe('Speech Bubble', () => {
  it('Snapshot Test', () => {
    const { container } = render(<WithSpeechBubbles />)
    expect(container).toMatchSnapshot()
  })
})
