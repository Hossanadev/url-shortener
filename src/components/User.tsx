"use client";
import { FC, useState } from "react";
import { User, X } from "react-feather";

const UserProfile: FC = () => {
  const [showProfileOptions, setShowProfileOptions] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowProfileOptions(!showProfileOptions)}
        className="bg-white flex justify-center items-center border border-[#14344C] h-10 w-10 rounded-full cursor-pointer"
      >
        <User color="#14344C" fill="#14344C" />
      </div>
      {showProfileOptions && (
        <div className="bg-white absolute top-12 right-0 shadow-lg ease-in-out transition-all duration-500 text-sm border border-[#e5e5e5] text-black rounded-sm">
          <span className="flex justify-end ">
            <span
              onClick={() => setShowProfileOptions(false)}
              className="block bg-red-500 hover:bg-red-600 w-fit cursor-pointer"
            >
              <X color="#ffffff" />
            </span>
          </span>
          <ul>
            <hr />
            <li className="px-6 py-1 cursor-pointer hover:underline">
              Profile
            </li>
            <hr />
            <li className="px-6 py-1 cursor-pointer hover:underline">
              Settings
            </li>
            <hr />
            <li className="px-6 py-1 cursor-pointer hover:underline">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
