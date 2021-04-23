const { Pedido, sequelize } = require('../models/');

const pedidosController = {
    index: async (req, res) => {
        let pedidos = await Pedido.findAll();
        return res.json(pedidos);
    },

    create: async (req, res) => {
        let { venda_id, quantidadePedido, produtos_id } = req.body;

        let novoPedido = await Pedido.create({
            venda_id, 
            quantidadePedido,
            produtos_id
        });

    return res.json(novoPedido);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { quantidadePedido } = req.body;

        const pedido = await Pedido.update({
            quantidadePedido
        },
        {
            where: { id },
        });

        return res.json(pedido);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const pedido = await Pedido.destroy({
            where: { id },
    });

    return res.json(pedido);
    },
};

module.exports = pedidosController;
