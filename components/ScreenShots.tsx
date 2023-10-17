import React, { useState } from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ScreenShots() {
  const [hovering, setHovering] = useState<string>("second.png");
  const renderDescription = (fileName: string, description: string) => {
    return (
      <Heading
        cursor={"pointer"}
        fontWeight={"300"}
        fontSize={22}
        onMouseEnter={() => setHovering(fileName)}
        textDecoration={"underline"}
        textDecorationColor={hovering === fileName ? "#9370DB" : "transparent"}
      >
        {description}
      </Heading>
    );
  };
  const renderFeatures = () => {
    return (
      <Flex
        width={"auto"}
        marginLeft={10}
        direction={"column"}
        justify={"space-around"}
      >
        {renderDescription(
          "second.png",
          "Customize your portfolio and connect with like-minded musicians"
        )}
        {renderDescription(
          "third.png",
          "Discover musicians around your area to collaborate and start your band"
        )}
        {renderDescription(
          "first.png",
          "Listen to your favorite songs in different instruments from our musicians"
        )}
        {renderDescription(
          "fourth.png",
          "Pinpoint your upcoming gigs and auditions for other musicians to see"
        )}
      </Flex>
    );
  };
  return (
    <Flex color="white" w="80%" alignSelf={"center"} justify={"center"}>
      <Flex width={250} justifyContent={"center"}>
        <Image
          position={"absolute"}
          src="https://d1icker9je2akj.cloudfront.net/ifoneframe.png"
          height={580}
          zIndex={1}
          alt="Picture of the author"
        />
        <SkeletonImage
          setHovering={setHovering}
          name={hovering}
          height={560}
          width={250}
        />
      </Flex>
      {renderFeatures()}
    </Flex>
  );
}

export default ScreenShots;
