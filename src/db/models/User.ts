const { DataTypes } = require('@sequelize/core');
import sequelize from '../conn';

let User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.FLOAT
    }
}, {
    timestamps: false
});

export default User;
