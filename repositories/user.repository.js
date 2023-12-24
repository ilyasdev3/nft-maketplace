const models = require("../models");
const User = models.User;

module.exports = {
  createUser: async (user) => {
    try {
      const create = await User.create(user);
      return create;
    } catch (error) {
      throw error;
    }
  },
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw error;
    }
  },
  getUserById: async (id) => {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch (error) {
      throw error;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  },
  updateUserById: async (id, user) => {
    try {
      const updateUser = await User.update(user, { where: { id } });
      return updateUser;
    } catch (error) {
      throw error;
    }
  },
  deleteUserById: async (id) => {
    try {
      const deleteUser = await User.destroy({ where: { id } });
      return deleteUser;
    } catch (error) {
      throw error;
    }
  },
};
