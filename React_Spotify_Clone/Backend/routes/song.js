const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      console.log("Received data:", req.body);
      console.log("Artist ID:", req.user._id);

      const { name, thumbnail, track } = req.body;

      if (!name || !thumbnail || !track) {
        return res
          .status(301)
          .json({ err: "Insufficient details to create song." });
      }

      const artist = req.user._id;
      const songDetails = { name, thumbnail, track, artist };
      const createdSong = await Song.create(songDetails);

      return res.status(200).json(createdSong);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  }
);

// Get route to get all songs I have published.
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const songs = await Song.find({ artist: req.user._id }).populate(
        "artist"
      );
      return res.status(200).json({ data: songs });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.message });
    }
  }
);

router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { artistId } = req.params;
      const artist = await User.findOne({ _id: artistId });
      if (!artist) {
        return res.status(301).json({ err: "artist does not exist" });
      }
      const songs = await Song.find({ artist: artistId });
      return res.status(200).json({ data: songs });
    } catch (error) {
      return res
        .status(405)
        .json({ error: "artist does not exist", message: error.message });
    }
  }
);
router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { songName } = req.params;
      const songs = await Song.find({ name: songName }).populate("artist");
      return res.status(200).json({ data: songs });
    } catch (error) {
      return res
        .status(404)
        .json({ error: "no song found ", message: error.message });
    }
  }
);
module.exports = router;
