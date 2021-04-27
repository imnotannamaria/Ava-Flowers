const { Categoria } = require('../models');

module.exports = async (request, response, next) => {
  let { nome } = request.body;

  let categoria = await Categoria.findAll({
    where: { nome },
  });

  if (categoria.length) {
    response.status(400).json({ error: 'A categoria já existe' });
  } else {
    if (!nome) {
      response.status(400).json({ error: 'O campo nome deve ser preenchido' });
    } else {
      if (categoria.length < 3) {
        response.status(400).json({ error: 'Insira uma categoria válida' });
      } else {
        next();
      }
    }
  }
};
