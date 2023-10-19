import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Cezs Music</title>
        <meta name="description" content="Music app for instrumentalists" />
        {/* <meta
          name="google-site-verification"
          content="BdcSbbdl77EbnSO73TNDEkRqlOehHt5rPaegmW6vBKA"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        justify={"space-between"}
        backgroundColor={"#2e2e2e"}
        w="100%"
        minH="100vh"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}

export default Layout;
