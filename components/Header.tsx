import { Flex, Link } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";
function Header() {
  return (
    <Flex w="100%" justify={"center"} paddingTop={5}>
      <Link href="/">
        <SkeletonImage
          setHovering={() => {}}
          name={"cezslogo.png"}
          height={90}
          width={230}
        />
      </Link>
    </Flex>
  );
}

export default Header;
