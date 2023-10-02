import React from "react";

const NavText = ({ displayText, active }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div
        className={`${
          active ? "text-white" : " text-gray-300"
        } text-base font-semibold hover:text-white`}
      >
        {displayText}
      </div>
    </div>
  );
};

export default NavText;
