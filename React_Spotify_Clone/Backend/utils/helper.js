const jwt = require("jsonwebtoken");

// Fix: Correct the export statement
module.exports.getToken = async (email, user) => {
  const token = jwt.sign(
    { identifier: user._id, email }, // Include email in the payload if needed
    "thisisAsecretthisSUPPOsedTOBE"
  );
  return token;
};
