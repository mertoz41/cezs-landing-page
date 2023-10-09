import { Flex } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";
function Header() {
  return (
    <Flex w="100%" justify={"center"}>
      <SkeletonImage name={"cezslogo.png"} height={90} width={230} />
    </Flex>
  );
}

export default Header;
