const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
require("dotenv").config();
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("Headers:", req.headers);
  next();
});

mongoose
  .connect(
    "mongodb+srv://swapnillandage79:iO4MmZsbuxaa6Xzq@cluster0.cfqlfgm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("connected to mongo");
  })
  .catch((error) => {
    console.log("error while connecting to db", error);
  });

// passport-jwt code

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisisAsecretthisSUPPOsedTOBE";

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      //console.log("Received token:", jwt_payload);
      const user = await User.findOne({ _id: jwt_payload.identifier });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

app.get("/", (req, res) => {
  res.send("Spotify Clone");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port, () => {
  console.log("App is running on" + " " + port);
});
