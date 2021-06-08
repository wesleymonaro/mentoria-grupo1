const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');
const { body, param } = require('express-validator');

const controllers = requireDir('./controllers');

routes.get('/produtos', controllers.produtos.list);
routes.get('/produtos/:id', [
    param('id').notEmpty()
], controllers.produtos.getById);

routes.post('/produtos', [
    body('nome').isString().notEmpty(),
    body('preco').isNumeric().notEmpty(),
    body('cor').isString().notEmpty(),
    body('descricao').isString().notEmpty(),
    body('foto').isString().notEmpty()
], controllers.produtos.create);

routes.put('/produtos/:id', [
    param('id').notEmpty(),
    body('nome').isString().notEmpty(),
    body('preco').isNumeric().notEmpty(),
    body('cor').isString().notEmpty(),
    body('descricao').isString().notEmpty(),
    body('foto').isString().notEmpty()
], controllers.produtos.update);
routes.delete('/produtos/:id', [param('id').notEmpty()], controllers.produtos.delete);

module.exports = routes;