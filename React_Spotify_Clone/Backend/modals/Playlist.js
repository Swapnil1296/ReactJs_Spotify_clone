const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
  Song: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
    required: false,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "song",
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

const PlaylistModel = mongoose.model("Playlist", Playlist);
module.exports = PlaylistModel;
