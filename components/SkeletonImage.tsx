import { useState, useEffect } from "react";
import { Image, Flex, Box } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { animated, useSpring } from "@react-spring/web";

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
  const [homeAnimation, animate] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  useEffect(() => {
    animate.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
    const img = new (window as any).Image();
    img.src = `https://d1icker9je2akj.cloudfront.net/${name}`;
    img.onload = () => {
      setLoadedImage(img.src);
    };
  }, [name]);

  return (
    <Flex>
      {loadedImage ? (
        <animated.div style={homeAnimation}>
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
        </animated.div>
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
