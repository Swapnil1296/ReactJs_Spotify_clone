import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../Containers/LoggedInContainer";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);

  const playSound = (songSrc) => {
    console.log(songSrc);
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    console.log(sound);
  };

  useEffect(() => {
    const getSongs = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getSongs();
  }, []);
  return (
    <LoggedInContainer>
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
        My Songs
      </div>
      <div className="space-y-3 overflow-auto">
        {songData.map((item, index) => (
          <SingleSongCard info={item} key={index} playSound={playSound} />
        ))}
      </div>
    </LoggedInContainer>
  );
};
export default MyMusic;
