import { useState, useEffect } from "react";
import { Image, Flex, Box } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonImage({
  name,
  height,
  width,
  setHovering,
}: {
  name: string;
  height: number;
  width: number | string;
  setHovering: any;
}) {
  const [loadedImage, setLoadedImage] = useState<string>("");

  useEffect(() => {
    const img = new (window as any).Image();
    img.src = `https://d1icker9je2akj.cloudfront.net/${name}`;
    img.onload = () => {
      setLoadedImage(img.src);
    };
  }, [name]);

  return (
    <Flex>
      {loadedImage ? (
        <Image
          objectFit={"cover"}
          src={loadedImage}
          alt="picture"
          _hover={{ boxShadow: "xl" }}
          w={width}
          alignSelf={"center"}
          mb={5}
          mt={3}
          onMouseEnter={() => setHovering(name)}
        />
      ) : (
        <Box height={height} width={width}>
          <Skeleton
            baseColor="#f2f2f2"
            highlightColor="white"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      )}
    </Flex>
  );
}

export default SkeletonImage;
