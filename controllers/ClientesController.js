const bcrypt = require('bcryptjs');
const { Cliente, sequelize } = require('../models/');

const clientesController = {
  index: async (req, res) => {
    let clientes = await Cliente.findAll();
    return res.json(clientes);
  },
  auth: async (request, response) => {
    const { email, senha } = request.body;

    const cliente = await cliente.findOne({
      where: {
        email,
      },
    });
    //se retornar true e for ele mesmo
    if (cliente && bcrypt.compareSync(senha, cliente.senha)) {
      request.session.clienteLogado = cliente;
      return response.redirect('/clientes/confirmacao');
    } else {
      return response.redirect('/clientes/login');
    }
  },
  cadastro: (request, response) => {
    return response.render('cadastro');
  },

  login: (request, response) => {
    return response.render('login');
  },

  confirmacao: (request, response) => {
    return response.render('confirmacaoCompra');
  },

  create: async (req, res) => {
    let {
      nome,
      email,
      senha,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    let novoCliente = await Cliente.create({
      nome,
      email,
      senha: senhaCrypt,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    });

    return res.redirect('/clientes/confirmacao');
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      nome,
      email,
      senha,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    } = req.body;

    const cliente = await Cliente.update(
      {
        nome,
        email,
        senha,
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
