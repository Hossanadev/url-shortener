import React from "react";
import { CardProps } from "../../../utilities/types";

const Card: React.FC<CardProps<JSX.Element>> = (props) => {
  const { icon, title, totalClicks, className } = props;
  return (
    <div className="flex items-center space-x-5 bg-white rounded px-4 py-6 shadow">
      <div
        className={`bg-[#14344C] shadow-md flex items-center justify-center rounded-full text-white ${className}`}
      >
        {icon}
      </div>
      <div>
        <span className="block">{title}</span>
        <span className="block font-semibold">{totalClicks}</span>
      </div>
    </div>
  );
};

export default Card;
