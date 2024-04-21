import { Box, Button, Text, VStack, Heading, Link, useColorMode, useColorModeValue, IconButton, AspectRatio, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlay, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <VStack p={5} spacing={8} align="stretch" bg={bgColor} color={textColor}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h1">AI Revolution</Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
      </Box>
      <Text fontSize="xl">Explore the cutting-edge applications of artificial intelligence across various industries.</Text>
      <AspectRatio ratio={16 / 9} maxW="560px">
        <iframe title="AI Introduction" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
      </AspectRatio>
      <Button leftIcon={<FaPlay />} colorScheme="purple" variant="solid">
        Watch more videos
      </Button>
      <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
        Learn more about AI
      </Button>
      <Link href="https://example.com" isExternal>
        Visit our AI research page
      </Link>
      <Image src="https://placehold.co/600x400" />
    </VStack>
  );
};

export default Index;
