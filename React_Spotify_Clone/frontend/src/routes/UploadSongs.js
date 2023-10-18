import React, { useState } from "react";
import spotify_logo from "../assets/Images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import NavText from "../components/shared/NavText";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const UploadSongs = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState();
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    console.log(response);
    if (response.err) {
      alert("Could not create song");
      return;
    }
    alert("Success");
    navigate("/home");
  };
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
        <div className="content p-8 pt-0 overflow-auto">
          <div className="text-white text-2xl mb-5 mt-8 font-semibold">
            Upload Your Music Here
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label="Name"
                labelClass="text-white"
                placeholder="Song Name"
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Thumbnail"
                labelClass="text-white"
                placeholder="Thumbnail"
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-5">
            {uploadedSongFileName ? (
              <div className="bg-white rounded-full p-3 w-1/3">
                {uploadedSongFileName.substring(0, 30)}
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                setName={setUploadedSongFileName}
              />
            )}
          </div>
          <div
            className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
            onClick={submitSong}
          >
            Submit Song
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSongs;
