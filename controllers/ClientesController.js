
const bcrypt = require('bcryptjs');
const { Cliente, sequelize } = require('../models/');

const clientesController = {
  index: async (req, res) => {
    let clientes = await Cliente.findAll();
    return res.json(clientes);
  },
  auth: async (request, response) => {
    const { email, senha } = request.body;

    const cliente = await Cliente.findOne({
      where: {
        email,
      },
    });
    //se retornar true e for ele mesmo
    if (cliente && bcrypt.compareSync(senha, cliente.senha)) {
      request.session.clientelogado = cliente;
      return response.redirect('/');
    } else {
      return response.redirect('/clientes/login');
    }
  },

  logoff: (req, res) => {
    req.session.destroy();

    return res.redirect('/');
  },

  cadastro: (request, response) => {
    return response.render('cadastro');
  },

  login: (request, response) => {
    return response.render('login');
  },

  confirmacao: (request, response) => {
    return response.render('confirmacaoCompra', { cliente: request.session.clientelogado });
  },

  create: async (req, res) => {
    let {
      email,
      senha,
      nome,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    let novoCliente = await Cliente.create({
      email,
      senha: senhaCrypt,
      nome,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    });
    req.session.clientelogado = novoCliente;
    return res.redirect('/clientes/login');
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      email,
      senha,
      nome,
      logradouro,
      cidade,
      estado,
      bairro,
      numero,
      complemento,
    } = req.body;

    const cliente = await Cliente.update(
      {
        email,
        senha,
        nome,
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