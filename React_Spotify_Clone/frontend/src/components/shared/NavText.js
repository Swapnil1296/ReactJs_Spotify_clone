import React from "react";
import { Link } from "react-router-dom";

const NavText = ({ displayText, active, pageURL }) => {
  // console.log(pageURL);
  return (
    <Link to={pageURL}>
      <div className="flex items-center justify-start cursor-pointer">
        <div
          className={`${
            active ? "text-white" : " text-gray-300"
          } text-base font-semibold hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};

export default NavText;
