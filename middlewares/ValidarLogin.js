const { Cliente } = require('../models');

module.exports = async (req, res, next) => {
  if (req.session.clientelogado != null) {
    next();
  } else {
    res.redirect('/clientes/login');
  }
};
