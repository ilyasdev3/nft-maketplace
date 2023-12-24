const bcrypt = require("bcryptjs");

const comparePassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

module.exports = { comparePassword };
