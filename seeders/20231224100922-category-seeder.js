"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Art",
        description: "Art",
      },
      {
        name: "Music",
        description: "Music",
      },
      {
        name: "Video",
        description: "Video",
      },
      {
        name: "Photography",
        description: "Photography",
      },
      {
        name: "Games",
        description: "Games",
      },
      {
        name: "Domains",
        description: "Domains",
      },
      {
        name: "Trading Cards",
        description: "Trading Cards",
      },
      {
        name: "Collectibles",
        description: "Collectibles",
      },
      {
        name: "Sports",
        description: "Sports",
      },
      {
        name: "Utility",
        description: "Utility",
      },
      {
        name: "Other",
        description: "Other",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
