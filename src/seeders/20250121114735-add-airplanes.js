'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber : "Airbus A330",
        capacity : 350,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 747",
        capacity : 300,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A330",
        capacity : 350,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Boeing 777",
        capacity : 320,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Airbus A320 Family",
        capacity : 200,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        modelNumber : "Douglas DC-3",
        capacity : 250,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
