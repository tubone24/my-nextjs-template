import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'
import { ReactNode, useEffect, useState } from 'react'
import { DateResponse } from 'src/pages/api/hello'
import axios from 'axios'
import { schemaForType } from 'src/common/scheme'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithSocial() {
  // const dateResponseScheme = schemaForType<DateResponse>()
  const [lastSync, setLastSync] = useState('')
  const getLastSync = () => {
    axios.get<DateResponse>('/api/hello').then((resp) => {
      setLastSync(resp.data.year)
    })
  }
  useEffect(() => {
    getLastSync()
  }, [])
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© {lastSync} tubone24. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/meitante1conan'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/tubone24'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
