import React from 'react'
import { render } from 'test/testUtils'
import HomePage from 'src/pages'
import { RecoilRoot } from 'recoil'
import {ChakraProvider} from "@chakra-ui/react";

global.fetch = require('node-fetch');

test('index snapshot', () => {
  const { container } = render(
          <RecoilRoot>
              <HomePage />
          </RecoilRoot>
    )
  expect(container).toMatchSnapshot()
})
