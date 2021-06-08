const sequelize = require('sequelize');
const connection = require('../config/database');

const Produto = connection.define('produto', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: sequelize.DOUBLE,
    },
    cor: {
        type: sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: false
    },
    foto: sequelize.STRING
});

// Produto.sync({ force: true });

module.exports = Produto;