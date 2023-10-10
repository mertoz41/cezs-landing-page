import React, { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import SkeletonImage from "./SkeletonImage";
import ReactTextTransition, { presets } from "react-text-transition";

function ScreenShots() {
  const [hovering, setHovering] = useState<string>("");

  const imageDescriptions: any = {
    "first.png": "this is the description for the first joint",
    "second.png": "second desc being shown",
    "third.png": "right now third is shown",
    "fourth.png": "LAST IS FOURTH",
  };
  return (
    <Flex direction={"column"} color={"white"} fontWeight={400}>
      <Heading alignSelf={"center"} fontWeight={400}>
        Music app for instrumentalists
      </Heading>
      <Flex h={70} w="100%" justify={"center"}>
        <ReactTextTransition springConfig={presets.gentle} inline>
          <Heading
            padding={5}
            fontSize={27}
            textAlign={"center"}
            fontWeight={400}
          >
            {imageDescriptions[hovering]}
          </Heading>
        </ReactTextTransition>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        padding={5}
        w="60%"
        alignSelf={"center"}
        justify={"space-between"}
      >
        <SkeletonImage
          setHovering={setHovering}
          name={"first.png"}
          height={430}
          width={200}
        />
        <SkeletonImage
          setHovering={setHovering}
          name={"third.png"}
          height={430}
          width={200}
        />
        <SkeletonImage
          setHovering={setHovering}
          name={"second.png"}
          height={430}
          width={200}
        />
        <SkeletonImage
          setHovering={setHovering}
          name={"fourth.png"}
          height={430}
          width={200}
        />
      </Flex>
    </Flex>
  );
}

export default ScreenShots;
