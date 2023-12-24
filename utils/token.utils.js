const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const payload = {
    id: user.id,
    isAdmin: user.isAdmin,
    isSeller: user.isSeller,
    isVerified: user.isVerified,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

const verifyToken = (async = (token) => {
  const verify = jwt.verify(token, JWT_SECRET);
  return verify;
});

module.exports = {
  generateToken,
  verifyToken,
};
