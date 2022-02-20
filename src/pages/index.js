import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={4} mb={8} align="center">
        Hello, I&apos;m a Front-end developer based in Ho Chi Minh City!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Heading as="h2" variant="page-title">
          Dieu Ngoc Bao
        </Heading>
      </Box>
    </Container>
  )
}

export default Page
