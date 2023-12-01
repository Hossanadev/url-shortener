"use client";
import React, { useState } from "react";
import { Header } from "../Header";
import { ChildrenProps } from "../../../utilities/types";
import { Footer } from "../Footer";
import { AsideNav } from "../Navigation";

const Authenticated: React.FC<ChildrenProps> = (props) => {
  const [showAside, setShowAside] = useState<boolean>();
  const { children } = props;
  return (
    <div className="layout">
      <Header showAside={setShowAside} />
      <aside
        className={`bg-white pt-28 pb-10 w-full px-3 text-xs absolute shadow-md rounded-b rounded-2xl transition-all duration-700 ease-linear z-10 hidden max-lg:block ${
          showAside ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <AsideNav />
      </aside>

      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Authenticated;
