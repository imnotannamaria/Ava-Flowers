const { Venda, sequelize } = require('../models/');

const VendasController = {
    index: async (req, res) => {
        let vendas = await Venda.findAll();
        return res.json(vendas);
    },

    create: async (req, res) => {
        let { 
            valorTotal,
            data,
            clientes_id,
            pagamentos_id,
            status_id 
        } = req.body;

        let novaVenda = await Venda.create({
            valorTotal,
            data,
            clientes_id,
            pagamentos_id,
            status_id
        });

    return res.json(novaVenda);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { 
            valorTotal, 
            clientes_id,
            pagamentos_id,
            status_id } = req.body;

        const venda = await Venda.update({
            valorTotal, 
            clientes_id,
            pagamentos_id,
            status_id
        },
        {
            where: { id },
        });

        return res.json(venda);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const venda = await Venda.destroy({
            where: { id },
    });

    return res.json(venda);
    },
};

module.exports = VendasController;
