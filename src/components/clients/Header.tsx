"use client";
import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { X, AlignRight } from "react-feather";

interface sideBar {
  showAside?: (data: boolean) => void;
}

export const Header: React.FC<sideBar> = (props) => {
  const { showAside } = props;
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleAside = () => {
    setShowSidebar(!showSidebar);
    if (showAside) {
      showAside(showSidebar);
    }
  };
  return (
    <div className="header flex justify-between items-center">
      <h1 className="font-semibold text-xl md:text-2xl">URL Manager</h1>
      <Navigation />
      {showSidebar ? (
        <AlignRight
          size={28}
          onClick={toggleAside}
          className="hidden max-md:block cursor-pointer"
        />
      ) : (
        <X
          size={28}
          onClick={toggleAside}
          className="hidden max-md:block cursor-pointer"
        />
      )}
    </div>
  );
};
