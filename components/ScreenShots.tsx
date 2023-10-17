import React, { useState } from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";

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
          "Customize your portfolio and connect with like minded musicians"
        )}
        {renderDescription(
          "third.png",
          "Discover musicians in your area to collaborate"
        )}
        {renderDescription(
          "first.png",
          "Listen to your favorite songs from our musicians"
        )}
        {renderDescription(
          "fourth.png",
          "Pinpoint your events for other musicians to see"
        )}
      </Flex>
    );
  };
  return (
    <Flex direction={"column"} color={"white"}>
      <Heading alignSelf={"center"} marginY={10} fontWeight={300}>
        Music app for instrumentalists
      </Heading>
      <Flex
        flexWrap={"wrap"}
        padding={5}
        w="80%"
        alignSelf={"center"}
        justify={"center"}
      >
        <Flex width={250} justifyContent={"center"}>
          <Image
            position={"absolute"}
            src="/images/ifoneframe.png"
            height={580}
            zIndex={1}
            alt="Picture of the author"
          />
          <SkeletonImage
            setHovering={setHovering}
            name={hovering}
            height={20}
            width={"100%"}
          />
        </Flex>
        {renderFeatures()}
      </Flex>
    </Flex>
  );
}

export default ScreenShots;
