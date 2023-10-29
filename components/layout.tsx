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
        <meta
          name="keywords"
          content="instruments, instrumentalists, music app, musicians app, instrumentalists app"
        />

        <meta
          name="google-site-verification"
          content="gLMGEfKVXXt32AxoCzmGOn9dpPL61yhKQ0aoxg9z00M"
        />
        <meta charSet="utf-8"></meta>

        <link rel="icon" href="/images/favicon.ico" />
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
