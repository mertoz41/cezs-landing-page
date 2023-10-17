import { Flex, Text, Link, Box } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      justify={"center"}
      alignSelf={"flex-end"}
      backgroundColor={"#212121"}
      w="100%"
      padding={5}
      color="white"
    >
      <Flex>
        <Link href={"/privacy"}>
          <Text>Privacy Policy</Text>
        </Link>
        <Box w={5}></Box>
        <Link href="/support">
          <Text>Support</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
