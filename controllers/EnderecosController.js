const { Endereco, sequelize } = require('../models/');

const enderecosController = {
    index: async (req, res) => {
    let enderecos = await Endereco.findAll();
    return res.json(enderecos);
    },

    create: async (req, res) => {
        let { logradouro, cidade, estado, bairro, numero, complemento } = req.body;

        let novoEndereco = await Endereco.create({
            logradouro,
            cidade,
            estado,
            bairro,
            numero,
            complemento,
        });

        return res.json(novoEndereco);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const {
            logradouro,
            cidade,
            estado,
            bairro,
            numero,
            complemento,
        } = req.body;

        const enderecoUP = await Endereco.update(
        {
            logradouro,
            cidade,
            estado,
            bairro,
            numero,
            complemento,
        },
        {
            where: { id },
        }
        );

        return res.json(enderecoUP);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const endereco = await Endereco.destroy({
            where: { id },
        });

        return res.json(endereco);
    },
};

module.exports = enderecosController;
