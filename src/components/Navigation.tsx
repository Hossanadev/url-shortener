import React from "react";
import { menu } from "../../utilities/navigation.json";

export const Navigation: React.FC = () => {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex space-x-4 text-sm">
          {menu.map((nav) => (
            <li key={nav.id} className="cursor-pointer">
              {nav.label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export const AsideNav: React.FC = () => {
  return (
    <div className="">
      <ul className="flex flex-col space-y-6">
        {menu.map((nav) => (
          <li key={nav.id} className="cursor-pointer border-b border-[#e5e5e5]">
            {nav.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
