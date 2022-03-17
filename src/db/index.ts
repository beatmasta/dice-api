import { db as config } from '../config';
import sequelize from './conn';
import definitions from './definitions';

let models = {};

for (const name in definitions) {
    models[name] = definitions[name];
}

config.createTables && sequelize.sync();

export default { sequelize, models };
