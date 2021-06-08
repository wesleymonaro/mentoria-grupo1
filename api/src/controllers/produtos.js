const Produto = require('../models/produto');
const validator = require('../utils/validator');

module.exports = {
    async list(req, res) {
        // Produto.findAll({}).then(data => {
        //     return res.status(200).json(produtos);
        // }).catch(error => {
        //     console.log(error);
        //     return res.status(500).send(error);
        // })
        
        try {
            const produtos = await Produto.findAll({});

            return res.status(200).json(produtos);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    async getById(req, res) {
        try {
            validator(req, res);

            const { id } = req.params;

            const produto = await Produto.findByPk(id);

            if (!produto) {
                return res.status(404).json({ message: "Product not found" })
            }

            return res.status(200).json(produto);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    async create(req, res) {
        try {
            validator(req, res);

            const produto = await Produto.create(req.body);

            return res.status(201).json(produto);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },  

    async update(req, res) {
        try {
            validator(req, res);

            const { id } = req.params;

            const produto = await Produto.findByPk(id);

            if (!produto) {
                return res.status(404).json({ message: "Product not found" })
            }

            const {
                nome,
                preco,
                cor,
                descricao,
                foto
            } = req.body;

            produto.nome = nome;
            produto.preco = preco;
            produto.cor = cor;
            produto.descricao = descricao;
            produto.foto = foto;

            const produtoAtualizado = await produto.save();

            return res.status(200).json(produtoAtualizado);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    async delete(req, res) {
        try {
            validator(req, res);
            
            const { id } = req.params;

            await Produto.destroy({ where: { id }})

            return res.status(204).send();
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    }
}