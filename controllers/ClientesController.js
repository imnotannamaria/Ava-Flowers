const { Cliente, sequelize } = require('../models/');
const enderecosController = require('./EnderecosController');

const clientesController = {
	index: async (req, res) => {
		let clientes = await Cliente.findAll();
		return res.json(clientes);
	},

	create: async (req, res) => {
		let { nome, email, senha, endereco_id } = req.body;

		let novoCliente = await Cliente.create({
			nome,
			email,
			senha,
			endereco_id,
		});

		return res.json(novoCliente);
	},

	update: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const cliente = await Cliente.update({
        nome,
        email,
        senha,
    },
    {
        where: { id },
    }
    );

    return res.json(cliente);
},

	delete: async (req, res) => {
		const { id } = req.params;

		const cliente = await Cliente.destroy({
			where: { id },
		});

		return res.json(cliente);
	},
};

module.exports = clientesController;
