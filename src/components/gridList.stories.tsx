import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import GridList from './gridList'

export default {
  title: 'components/GridList',
  component: GridList,
} as Meta

export const Template: Story = (args) => <GridList />
