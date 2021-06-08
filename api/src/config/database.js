const sequelize = require('sequelize');

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} = process.env;

const connection = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

module.exports = connection;