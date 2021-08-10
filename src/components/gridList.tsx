import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Feature</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          This template contains a lot of modern features.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <HStack key={1} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Next.js</Text>
              <Text color={'gray.600'}>
                We use Next.js, so we are familiar with SPA, SSG, and API development.
              </Text>
            </VStack>
          </HStack>
          <HStack key={2} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Chakra UI</Text>
              <Text color={'gray.600'}>
                By using Chakra UI, you can easily achieve CSS in JS while achieving Utility First.
              </Text>
            </VStack>
          </HStack>
          <HStack key={3} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>TypeScript</Text>
              <Text color={'gray.600'}>
                I've heard from my grandpa that if you don't use TypeScript, you'll get very angry.
              </Text>
            </VStack>
          </HStack>
          <HStack key={4} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Jest(UI SnapShot)</Text>
              <Text color={'gray.600'}>
                By using Jest (UI SnapShot), you can run regression tests safely and easily.
              </Text>
            </VStack>
          </HStack>
          <HStack key={5} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>StoryBook</Text>
              <Text color={'gray.600'}>
                Storybook is an open source tool for developing UI components and pages in
                isolation.
              </Text>
            </VStack>
          </HStack>
          <HStack key={6} align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <VStack align={'start'}>
              <Text fontWeight={600}>Recoil</Text>
              <Text color={'gray.600'}>
                By using Recoil, it is now possible to manage the state of functional components in
                a relatively simple way.
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
