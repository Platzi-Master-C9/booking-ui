import React, { useState } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

import "../assets/styles/Layout.scss";

export const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Header showSidebar={showSidebar} />

      <section className="container">
        <Sidebar sidebar={sidebar} />
        {children}
      </section>
    </>
  );
};
