import React from "react";
import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Link, Icon, Stack, Flex, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="teal.500" color="white">
        <Heading as="h1" size="lg">
          Company Name
        </Heading>
        <HStack as="nav" spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" textAlign="center">
              Welcome to Our Company
            </Heading>
            <Text mt={4} textAlign="center">
              Your partner in building a better future.
            </Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzA5NTgyOTg4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Office Image" />
          <Button size="lg" colorScheme="teal" leftIcon={<Icon as={FaPlus} />}>
            Learn More
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={5} bg="teal.600" color="white">
        <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center" px={4}>
          <Text>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#">
              <Icon as={FaFacebook} />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} />
            </Link>
            <Link href="#">
              <Icon as={FaLinkedin} />
            </Link>
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
