import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <Box as="main" pb={8} theme="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dieu Ngoc Bao - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
