import { useState, useEffect } from "react";
import { Image, Flex } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonImage({
  name,
  height,
  width,
}: {
  name: string;
  height: number;
  width: number;
}) {
  const [loadedImage, setLoadedImage] = useState<string>("");

  useEffect(() => {
    const img = new (window as any).Image();
    img.src = `https://d1icker9je2akj.cloudfront.net/${name}`;
    img.onload = () => {
      setLoadedImage(img.src);
    };
  }, [name]);
  //   const checkModal = () => {
  //     if (!container) {
  //       onOpen();
  //     }

  return (
    <Flex marginTop={5}>
      {loadedImage ? (
        <Image
          objectFit={"cover"}
          cursor={"pointer"}
          src={loadedImage}
          alt="picture"
          _hover={{ boxShadow: "xl" }}
          h={height}
          w={width}
          alignSelf={"center"}
        //   boxShadow={"2xl"}
          mb={5}
        />
      ) : (
        <Skeleton
          baseColor="#f2f2f2"
          highlightColor="white"
          style={{
            height: height,
            width: width,
          }}
        />
      )}
    </Flex>
  );
}

export default SkeletonImage;
