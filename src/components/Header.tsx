"use client";
import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { X, AlignRight } from "react-feather";
import { SidebarProps } from "../../utilities/types";
import UserProfile from "./User";

export const Header: React.FC<SidebarProps> = (props) => {
  const { showAside } = props;
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const toggleAside = () => {
    setShowSidebar(!showSidebar);
    showAside?.(showSidebar);
  };
  return (
    <div className="header flex justify-between items-center">
      <h1 className="font-semibold text-xl md:text-2xl">URL Manager</h1>
      <div className="flex space-x-6 items-center">
        <Navigation />
        <UserProfile />
        {showSidebar ? (
          <AlignRight
            size={28}
            onClick={toggleAside}
            className="hidden max-lg:block cursor-pointer"
          />
        ) : (
          <X
            size={28}
            onClick={toggleAside}
            className="hidden max-lg:block cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
