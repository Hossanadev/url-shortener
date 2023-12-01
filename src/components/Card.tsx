import React from "react";
import { CardProps } from "../../utilities/types";

const Card: React.FC<CardProps<JSX.Element>> = (props) => {
  const { icon, title, clicks, className } = props;
  return (
    <div className="flex items-center space-x-5 bg-white rounded px-4 py-6 shadow">
      <div className={"shadow rounded-full bg-white p-1"}>
          <div
              className={`bg-[#14344C] shadow flex items-center p-0.5 justify-center rounded-full text-white ${className}`}
          >
              {icon}
          </div>
      </div>
      <div>
        <span className="block">{title}</span>
        <span className="block font-semibold">{clicks}</span>
      </div>
    </div>
  );
};

export default Card;
