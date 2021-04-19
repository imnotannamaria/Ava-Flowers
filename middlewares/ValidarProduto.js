const { Produto } = require('../models');

module.exports = async (request, response, next) => {
  let { tipo, tipoFlor, valor, quantidade } = request.body;

  let produto = await Produto.findAll({
    where: { tipo, tipoFlor, valor, quantidade },
  });

  if (!tipo || !tipoFlor || !valor || !quantidade) {
    response
      .status(400)
      .json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    return;
  } else {
    next();
  }
};
