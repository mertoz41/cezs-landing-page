import React, { useState } from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";

function ScreenShots() {
  const [hovering, setHovering] = useState<string>("second.png");
  const renderFeature = (fileName: string, description: string) => {
    return (
      <Heading
        fontWeight={"300"}
        fontSize={28}
        onMouseEnter={() => setHovering(fileName)}
      >
        {description}
      </Heading>
    );
  };
  return (
    <Flex direction={"column"} color={"white"} fontWeight={400}>
      <Heading alignSelf={"center"} fontWeight={400}>
        Music app for instrumentalists
      </Heading>

      <Flex
        flexWrap={"wrap"}
        padding={5}
        w="60%"
        alignSelf={"center"}
        justify={"center"}
      >
        <Flex width={250} justifyContent={"center"}>
          <Image
            position={"absolute"}
            src="/images/ifoneframe.png"
            height={580}
            alt="Picture of the author"
          />
          <SkeletonImage
            setHovering={setHovering}
            name={hovering}
            height={20}
            width={"100%"}
          />
        </Flex>
        <Flex
          width={500}
          height={580}
          marginLeft={10}
          direction={"column"}
          justify={"space-around"}
        >
          {renderFeature(
            "second.png",
            "Customize your profile to connect with musicians with your music liking."
          )}
          {renderFeature(
            "third.png",
            "Discover musicians in your area to collaborate"
          )}
          {renderFeature(
            "first.png",
            "Listen to your favorite songs from our musicians"
          )}
          {renderFeature(
            "fourth.png",
            "Pinpoint your upcoming events for other musicians to see"
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ScreenShots;
