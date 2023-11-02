import React, { useState } from "react";
import TextInput from "./../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "./../utils/serverHelpers";

const CreatePlaylistModal = ({ closeModal }) => {
  console.log("closeModal:", closeModal);
  const [playlistName, setPlayListName] = useState("");
  const [playListThumbnail, setPlayListThumbnail] = useState("");
  const creatPlayList = async () => {
    const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
      name: playlistName,
      thumbnail: playListThumbnail,
      songs: [],
    });
    console.log("response", response);
  };

  return (
    <div
      className="absolute bg-black bg-opacity-50 w-screen h-screen text-black flex justify-center items-center"
      onClick={closeModal}
    >
      <div className="w-1/3 bg-gray-300 rounded-md p-4">
        <div className=" text-white text-lg font-semibold mb-5">
          Crate Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInput
            label="Name"
            labelClass={"text - white"}
            placeholder="Playlist Name"
            value={playlistName}
            setValue={setPlayListName}
          />{" "}
          <TextInput
            label="Thumbnail"
            labelClass={"text - white"}
            placeholder="Thumbnail"
            value={playListThumbnail}
            setValue={setPlayListName}
          />
          <div
            className="bg-white w-1/3 rounded flex justify-center items-center py-3 mt-4"
            onClick={creatPlayList}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
