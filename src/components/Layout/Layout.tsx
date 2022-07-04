import { ReactElement } from "react";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
