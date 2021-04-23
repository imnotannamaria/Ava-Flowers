const { Pagamento, sequelize } = require('../models');

const PagamentoController = {
    index: async (req, res) => {
        let tipos_pagamento = await Pagamento.findAll();
        return res.json(tipos_pagamento);
    },

    create: async (req, res) => {
        let { nome } = req.body;

        let NovoPagamento = await Pagamento.create({
            nome
        });

        return res.json(NovoPagamento);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;

        const pagamento = await Pagamento.update(
        {
            nome,
        },
        {
            where: { id },
        }
        );

        return res.json(pagamento);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const pagamento = await Pagamento.destroy({
        where: { id },
        });

        return res.json(pagamento);
    },
};

module.exports = PagamentoController;
