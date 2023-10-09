import { Flex, Text, Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      alignSelf={"center"}
      backgroundColor={"red"}
      w="100%"
    >
      <Link href="https://apps.apple.com/us/app/cezs/id6450903389">
        <Text>Available in App Store</Text>
      </Link>
      <Flex>
        <Text>Privacy Policy</Text>
        <Text>Support</Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
