import React, { Children, useState } from "react";

import spotify_logo from "../assets/Images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import NavText from "../components/shared/NavText";
import { Howl, Howler } from "howler";

const LoggedInContainer = ({ children }) => {
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
  };
  const pauseSound = () => {
    soundPlayed.pause();
  };
  const toggelPlayPasue = () => {
    if (isPaused) {
      playSound(
        "https://res.cloudinary.com/doyokni4a/video/upload/v1697719881/p5t4niztdvv6anwjpakq.mp3"
      );
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };
  return (
    <div className="w-full h-full bg-app-black">
      <div className="w-full h-9/10 flex">
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
              <IconText
                iconName={"mdi:library-music-outline"}
                displayText={"My Music"}
              />
            </div>
            <div className="pt-5">
              <IconText
                iconName={"icon-park-solid:add"}
                displayText={"Create a Playlist"}
              />
              <IconText
                iconName={"bi:heart-fill"}
                displayText={"Liked Songs"}
              />
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
        <div className="h-full w-4/5 bg-app-black overflow-auto">
          <div className="navbar bg  h-1/10 bg-black bg-opacity-50 flex items-center justify-end">
            <div className="w-1/2 flex h-full">
              <div className="w-3/5 flex justify-around items-center">
                <NavText displayText={"Premium"} active />
                <NavText displayText={"Support"} />
                <NavText displayText={"Download"} />
                <div className="h-1/2 border-r border-white  "></div>
              </div>
              <div className="w-2/5 flex justify-around h-full items-center">
                <NavText displayText={"Upload songs"} />
                <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  user
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8">{children}</div>
        </div>
      </div>
      {/* current song playing bar/song navigation bar */}
      <div className="w-full h-1/10 bg-black opacity-30 flex text-white items-center px-4">
        <div className="w-1/4 flex items-center">
          <img
            src="https://images.unsplash.com/photo-1697659885050-fc2c379082a5?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="current song Image"
            className="h-14 w-14 runded"
          />
          <div className="pl-4">
            <div className="text-sm hover:underline hover:cursor-pointer">
              Curtains
            </div>
            <div className="text-xs text-gray-400 hover:underline hover:cursor-pointer">
              Ed Shareen
            </div>
          </div>
        </div>
        <div className="w-1/2 flex  h-full  justify-center items-center flex-col">
          <div className="flex w-1/3 justify-between items-center">
            {/* controls for playing songs */}
            <Icon
              icon="bx:shuffle"
              fontSize={30}
              className="hover:cursor-pointer"
            />
            <Icon
              icon="icomoon-free:previous"
              fontSize={30}
              className="hover:cursor-pointer"
            />
            <Icon
              icon={
                isPaused ? "zondicons:play-outline" : "zondicons:pause-outline"
              }
              fontSize={40}
              className="hover:cursor-pointer"
              onClick={() => toggelPlayPasue()}
            />
            {/* <Icon icon= fontSize={30} className="hover:cursor-pointer" /> */}
            <Icon
              icon="icomoon-free:next"
              fontSize={30}
              className="hover:cursor-pointer"
            />
            <Icon
              icon="iconoir:repeat"
              fontSize={30}
              className="hover:cursor-pointer"
            />
          </div>
          {/* <div>Progress Bar</div> */}
        </div>
        <div className="w-1/4 flex justify-end">Shushila</div>
      </div>
    </div>
  );
};

export default LoggedInContainer;
