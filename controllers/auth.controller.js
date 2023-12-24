const userRepository = require("../repositories/user.repository");
const { hashPassword } = require("../utils/hashPassword.utils");
const { generateToken } = require("../utils/token.utils");
const STATUS = require("../constant/status.constant");
const { comparePassword } = require("../utils/comparePassword.utils");

module.exports = {
  registerUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return createError(
          STATUS.BAD_REQUEST,
          "Email and password are required"
        );
      }

      const findUser = await userRepository.getUserByEmail(email);
      if (findUser) {
        return res.status(STATUS.BAD_REQUEST).json({
          message: "Email already exists",
        });
      }

      const hashPass = await hashPassword(password);
      const user = await userRepository.createUser({
        ...req.body,
        email: email.toLowerCase(),
        password: hashPass,
      });

      return res
        .status(STATUS.CREATED)
        .json({ message: "User created successfully" });
    } catch (err) {
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return createError(
          STATUS.BAD_REQUEST,
          "Email and password are required"
        );
      }

      const user = await userRepository.getUserByEmail(email);
      if (!user) {
        return res.status(STATUS.NOT_FOUND).json({
          message: "User not found",
        });
      }
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return createError(STATUS.UNAUTHORIZED, "Wrong password");
      }
      const userForToken = {
        id: user._id,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        isVerified: user.isVerified,
      };

      const token = await generateToken(userForToken);
      return res
        .status(STATUS.SUCCESS)
        .json({ token, authState: "logedin", message: "Login successfully" });
    } catch (err) {
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  },
};
