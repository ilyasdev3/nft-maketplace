const STATUS = require("../../constant/status.constant");
const { createError } = require("../../utils/error");
const userSchema = require("./user.schema");

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { error } = userSchema.singUp.validate(req.body);
      if (error) {
        throw createError(STATUS.BAD_REQUEST, error.message);
      }
      const user = await userRepository.create(req.body);
      res.status(STATUS.CREATED).json(user);
    } catch (err) {
      next(err);
    }
  },
  signIn: async (req, res, next) => {
    try {
      const { error } = userSchema.singIn;
      if (error) {
        throw createError(STATUS.BAD_REQUEST, error.message);
      }
      const user = await userRepository.findOne({ email: req.body.email });
      if (!user) {
        throw createError(STATUS.NOT_FOUND, "User not found");
      }
      const isMatch = await user.comparePassword(req.body.password);
      if (!isMatch) {
        throw createError(STATUS.UNAUTHORIZED, "Wrong password");
      }
      const token = await tokenUtils.generateToken(user);
      res.status(STATUS.SUCCESS).json({ token });
    } catch (err) {
      next(err);
    }
  },
  forgotPassword: async (req, res, next) => {
    try {
      const { error } = userSchema.forgotPassword.validate(req.body);
      if (error) {
        throw createError(STATUS.BAD_REQUEST, error.message);
      }
      const user = await userRepository.findOne({ email: req.body.email });
      if (!user) {
        throw createError(STATUS.NOT_FOUND, "User not found");
      }
      const token = await tokenUtils.generateToken(user);
      const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/users/reset-password/${token}`;
      const message = `Please make a PUT request to: \n\n ${resetPasswordUrl}`;
      await sendEmail({
        email: user.email,
        subject: "Password reset token",
        message,
      });
      res.status(STATUS.SUCCESS).json({ message: "Email sent" });
    } catch (err) {
      next(err);
    }
  },
};
