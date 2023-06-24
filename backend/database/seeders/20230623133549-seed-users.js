'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        "email": "mustain.bilah@gmail.com",
        "password": "",
        "token": null,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]

    await queryInterface.bulkInsert('users', data, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
