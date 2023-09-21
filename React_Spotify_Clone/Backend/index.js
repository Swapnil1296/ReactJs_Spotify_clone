const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./modals/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
require("dotenv").config();
const app = express();
const port = 8000;
app.use(express.json());

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
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  res.send("Spotify Clone");
});
app.use("/auth", authRoutes);
app.use("/songs", songRoutes);

app.listen(port, () => {
  console.log("App is running on" + " " + port);
});
