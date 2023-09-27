"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { ChildrenProps } from "../../../utilities/types";
import { Footer } from "./Footer";
import { AsideNav } from "./Navigation";

const Layout: React.FC<ChildrenProps> = (props) => {
  const [showAside, setShowAside] = useState<boolean>();
  const { children } = props;
  return (
    <div className="layout">
      <Header showAside={setShowAside} />
      <aside
        className={`bg-white h-screen py-28 w-[70%] px-3 text-xs border-r border-black/20 absolute shadow-2xl transition-all duration-700 ease-linear z-10 hidden max-md:block ${
          showAside ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <AsideNav />
      </aside>

      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
