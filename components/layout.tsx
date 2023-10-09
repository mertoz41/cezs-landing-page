import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
// import PageHead from "./PageHead";

function Layout({ children }: { children: any }) {
  return (
    <>
      {/* <PageHead>
        <meta name="description" content="Artstone Marble & Granite" />
      </PageHead> */}
      <Flex direction={"column"} backgroundColor={"#2e2e2e"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  );
}

export default Layout;
