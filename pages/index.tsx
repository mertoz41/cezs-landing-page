import { Flex, Heading, Text } from "@chakra-ui/react";
import SkeletonImage from "../components/SkeletonImage";
function Home() {
  return (
    <Flex w={"100vw"} direction={"column"}>
      <Heading alignSelf={"center"} color="white" fontWeight={400}>
        Music app for instrumentalists
      </Heading>

      <Text w="70%" fontSize={24} alignSelf={"center"} color={"white"}>
        Musicians platform focused on instruments and music as performing arts.
        Here, you build a portfolio by playing your favorite songs, then
        discover new music and musicians to follow through our catalog.
      </Text>
      <SkeletonImage name={"first.png"} height={430} width={180} />
      <SkeletonImage name={"second.png"} height={430} width={180} />
      <SkeletonImage name={"third.png"} height={430} width={180} />
      <SkeletonImage name={"fourth.png"} height={430} width={180} />
    </Flex>
  );
}

export default Home;
