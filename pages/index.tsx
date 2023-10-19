import { Flex, Heading, Link } from "@chakra-ui/react";
import ScreenShots from "../components/ScreenShots";

function Home() {
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading alignSelf={"center"} marginY={10} color="white" fontWeight={300}>
        Music app for instrumentalists
      </Heading>
      <ScreenShots />
      <Link
        isExternal
        textDecoration={"underline"}
        textDecorationColor={"#9370DB"}
        href="https://apps.apple.com/us/app/cezs/id6450903389"
      >
        <Heading
          marginY={10}
          fontWeight={300}
          textAlign={"center"}
          color="white"
        >
          Available in the App Store
        </Heading>
      </Link>
    </Flex>
  );
}

export default Home;
