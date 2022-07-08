import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jardel Vorpagel</Text>
          <Text color="gray.300" fontSize="small">
            jardelvorpagel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jardel Vorpagel"
        src="https://github.com/Jardelvorpagel.png"
      />
    </Flex>
  );
}
