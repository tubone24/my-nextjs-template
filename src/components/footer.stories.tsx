import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, Icon, Image } from '@chakra-ui/react'

import Footer from './footer'

export default {
  title: 'components/Footer',
  component: Footer,
} as Meta

export const Template: Story = (args) => <Footer />
