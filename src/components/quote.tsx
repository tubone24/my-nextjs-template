import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
        I've had more and more opportunities to create everything with Next.js, but it's getting to
        be a hassle to modify the project from create-next-app to my liking every time. So I decided
        to create a template to speed up the development process.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={'https://avatars.githubusercontent.com/u/9511227?v=4'}
          alt={'tubone24'}
          mb={2}
        />

        <Text fontWeight={600}>tubone24</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Rubbish Engineer
        </Text>
      </Box>
    </Stack>
  )
}
