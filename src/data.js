"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bets = exports.users = void 0;
exports.users = [
    { id: 1, name: 'user1', balance: 102348.15 },
    { id: 2, name: 'user2', balance: 2500 },
];
exports.bets = [
    { id: 1, userId: 1, betAmount: 11.4, chance: 0.1, payout: 0, win: false },
    { id: 2, userId: 1, betAmount: 20, chance: 0.9, payout: 40, win: true },
    { id: 3, userId: 2, betAmount: 10, chance: 0.3, payout: 0, win: false },
];
