import { db as config } from '../config';
import { Sequelize } from '@sequelize/core';

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.hostname,
    dialect: 'mysql'
});

export default sequelize;
