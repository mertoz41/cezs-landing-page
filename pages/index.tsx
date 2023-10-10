import { Flex, Heading, Link } from "@chakra-ui/react";
import ScreenShots from "../components/ScreenShots";
function Home() {
  return (
    <Flex w={"100vw"} direction={"column"}>
      <ScreenShots />
      <Link href="https://apps.apple.com/us/app/cezs/id6450903389">
        <Heading
          marginBottom={5}
          fontWeight={400}
          textAlign={"center"}
          color="white"
        >
          Available in App Store
        </Heading>
      </Link>
    </Flex>
  );
}

export default Home;
