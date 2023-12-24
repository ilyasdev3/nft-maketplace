const JOI = require("joi");

module.exports = {
  singUp: JOI.object({
    name: JOI.string().required(),
    email: JOI.string().email().required(),
    password: JOI.string().required(),
    isAdmin: JOI.boolean(),
    isSeller: JOI.boolean(),
    isVerified: JOI.boolean(),
  }),
  singIn: JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().required(),
  }),
  forgotPassword: JOI.object({
    email: JOI.string().email().required(),
  }),
  resetPassword: JOI.object({
    password: JOI.string().required(),
    passwordConfirmation: JOI.string().required(),
  }),
};
