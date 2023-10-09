import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import ScreenShots from "../components/ScreenShots";
function Home() {
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading alignSelf={"center"} color="white" fontWeight={400}>
        Music app for instrumentalists
      </Heading>
      {/* <Text w="70%" fontSize={24} alignSelf={"center"} color={"white"}>
        Musicians platform focused on instruments and music as performing arts.
        Here, you build a portfolio by playing your favorite songs, then
        discover new music and musicians to follow through our catalog.
      </Text> */}
      <ScreenShots />
      <Link href="https://apps.apple.com/us/app/cezs/id6450903389">
        <Heading marginBottom={5} fontWeight={400} textAlign={"center"} color="white">
          Available in App Store
        </Heading>
      </Link>
    </Flex>
  );
}

export default Home;
