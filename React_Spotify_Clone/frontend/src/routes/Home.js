import React from "react";
import spotify_logo from "../assets/Images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import NavText from "../components/shared/NavText";

const HomeComponent = () => {
  return (
    <div className="w-full h-full flex">
      {/* this is for left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="p-5">
            <img src={spotify_logo} alt="Spotify logo" width={100} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"mingcute:search-fill"}
              displayText={"Search"}
            />
            <IconText
              iconName={"fluent:library-16-filled"}
              displayText={"Library"}
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"icon-park-solid:add"}
              displayText={"Create a Playlist"}
            />
            <IconText iconName={"bi:heart-fill"} displayText={"Liked Songs"} />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-solid border-gray-200 text-white w-2/5 flex justify-center items-center px-2 py-1 rounded-full hover:border-white cursor-pointer">
            <Icon icon="mingcute:earth-line" color={"white"} />
            <div className="ml-2 font-semibold text-sm">English</div>
          </div>
        </div>
      </div>
      {/* this is for left content */}
      <div className="h-full w-4/5 bg-app-black">
        <div className="navbar bg  h-1/10 bg-black bg-opacity-50 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-3/5 flex justify-around items-center">
              <NavText displayText={"Premium"} active />
              <NavText displayText={"Support"} />
              <NavText displayText={"Download"} />
              <div className="h-1/2 border-r border-white  "></div>
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <NavText displayText={"Sign Up"} />
              <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                Log In
              </div>
            </div>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default HomeComponent;
