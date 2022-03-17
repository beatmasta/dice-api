'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { id: 1, name: 'user1', balance: 102348.15 },
      { id: 2, name: 'user2', balance: 2500 },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
