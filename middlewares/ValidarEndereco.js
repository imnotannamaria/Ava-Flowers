const { Endereco } = require('../models');

module.exports = async (request, response, next) => {
  let {
    logradouro,
    cidade,
    estado,
    bairro,
    numero,
    complemento,
  } = request.body;

  let endereco = await Endereco.findAll({
    where: { logradouro, cidade, estado, bairro, numero, complemento },
  });

  if (!logradouro || !cidade || !estado || !bairro || !numero) {
    response
      .status(400)
      .json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    return;
  } else {
    if (logradouro.length < 5) {
      response.status(400).json({ error: 'Inisira um logradouro válido' });
      return;
    } else {
      next();
    }
  }
};
