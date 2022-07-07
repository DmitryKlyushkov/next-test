import Head from "next/head";
import { ReactElement } from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Next Test</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
