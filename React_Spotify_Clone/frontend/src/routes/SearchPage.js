import React, { useState } from "react";
import LoggedInContainer from "../Containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "./../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";
const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [serchText, setSearchText] = useState("");
  const [songsData, setSongsData] = useState([]);
  const searchSong = async () => {
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + serchText
    );
    setSongsData(response.data);
  };
  console.log(songsData);
  return (
    <LoggedInContainer currentActiveScreen={"search"}>
      <div className="w-full py-6">
        <div
          className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex items-center text-white ${
            isInputFocused ? "border border-white" : ""
          }`}
        >
          <Icon icon="lucide:search" className="text-lg" />

          <input
            type="text"
            placeholder="What do you want to listen to >>"
            className="w-full bg-gray-800 focus:outline-none px-2"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            value={serchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                searchSong();
              }
            }}
          />
        </div>
        <div>
          {songsData.length > 0 ? (
            <div className="text-white  py-6">
              Showing Search Result For "
              <span className="font-bold ">{serchText}</span>"
            </div>
          ) : (
            ""
          )}
          {songsData.map((item, index) => (
            <SingleSongCard key={index} info={item} playSound={() => {}} />
          ))}
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
