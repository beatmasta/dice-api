'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bets', [
      { id: 1, userId: 1, betAmount: 11.4, chance: 0.1, payout: 0, win: false },
      { id: 2, userId: 1, betAmount: 20, chance: 0.9, payout: 40, win: true },
      { id: 3, userId: 2, betAmount: 10, chance: 0.3, payout: 0, win: false },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Bets', null, {});
  }
};
