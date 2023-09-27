const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper");

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;
  // finding user by email id if exist throwing a error.
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(403).json("A user is already exist with this email");
  }
  // hashing the password before inserting into db.
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
  };

  const newUser = await User.create(newUserData);
  // creating a token to return the user.
  const token = await getToken(email, newUser);
  const userToReturn = { ...newUser.toJSON(), token };
  // deleting the password before responding.
  delete userToReturn.password;

  return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
  // finding if user exist in db.
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  //if not exist throwing error
  if (!user) {
    return res.status(403).json({ err: "Invalid Credentials" });
  }
  // comparing password with entered password if not valid throwing error.
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ err: "Invalid Credentials" });
  }
  // generating token & returning it.
  const token = await getToken(user.email, user);
  const userToReturn = { ...user.toJSON(), token };
  // deleting the password before responding.
  delete userToReturn.password;

  return res.status(200).json(userToReturn);
});

module.exports = router;
