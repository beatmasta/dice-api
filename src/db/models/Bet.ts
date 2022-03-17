import { DataTypes } from '@sequelize/core';
import sequelize from '../conn';
import User from './User';

let Bet = sequelize.define('Bet', {
    betAmount: {
        type: DataTypes.FLOAT
    },
    chance: {
        type: DataTypes.FLOAT
    },
    payout: {
        type: DataTypes.FLOAT
    },
    win: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});

Bet.belongsTo(User, { as: 'User' });

export default Bet;
