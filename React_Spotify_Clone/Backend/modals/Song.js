const mongoose = require("mongoose");

const Song = new mongoose.Schema({
  Song: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
    required: false,
  },
  Track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const SongModel = mongoose.model("Song", Song);
module.exports = SongModel;
