import React, { useContext } from "react";
import SongContext from "./../../Context/SongContext";

const SingleSongCard = ({ info, playSound }) => {
  const { currentSong, setCurrentSong } = useContext(SongContext);
  return (
    <div
      className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm "
      onClick={() => setCurrentSong(info)}
    >
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url(${info.thumbnail})`,
        }}
      ></div>
      <div className="flex w-full ">
        <div className="text-white flex justify-center  flex-col pl-4 w-5/6">
          <div className="cursor-pointer hover:underline">{info.name}</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">
            {info.artist.firstName}
          </div>
        </div>
        <div className="text-gray-400 flex justify-center items-center text-sm w-1/6">
          <div>8.99</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
