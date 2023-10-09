import { Flex } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";
function ScreenShots() {
  return (
    <Flex
      flexWrap={"wrap"}
      padding={5}
      w="60%"
      alignSelf={"center"}
      justify={"space-between"}
    >
      <SkeletonImage name={"first.png"} height={430} width={200} />
      <SkeletonImage name={"third.png"} height={430} width={200} />
      <SkeletonImage name={"second.png"} height={430} width={200} />
      <SkeletonImage name={"fourth.png"} height={430} width={200} />
    </Flex>
  );
}

export default ScreenShots;
