module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Ilyas",
        lastName: "Khan",
        email: "ilyas@gmail.com",
        password:
          "$2b$10$m1KRPTMck3c7BaVMLTdnoOfr3.U829z2jckS3j77SGaFMQYwBgdsK",
        isVerified: 1,
      },
      {
        firstName: "Shamoil",
        lastName: "Khan",
        email: "shamoil@gmail.com",
        password:
          "$2b$10$m1KRPTMck3c7BaVMLTdnoOfr3.U829z2jckS3j77SGaFMQYwBgdsK",
        isVerified: 1,
      },
      {
        firstName: "Safdar",
        lastName: "Khan",
        email: "safdar@gmail.com",
        password:
          "$2b$10$m1KRPTMck3c7BaVMLTdnoOfr3.U829z2jckS3j77SGaFMQYwBgdsK",
        isVerified: 1,
      },
      {
        firstName: "Ali",
        lastName: "Khan",
        email: "Ali@gmail.com",
        password:
          "$2b$10$m1KRPTMck3c7BaVMLTdnoOfr3.U829z2jckS3j77SGaFMQYwBgdsK",
        isVerified: 1,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
