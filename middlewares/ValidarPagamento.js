const { Pagamento } = require('../models');

module.exports = async (request, response, next) => {
  let { nome } = request.body;

  let pagamento = await Pagamento.findAll({
    where: { nome },
  });

  if (pagamento.length) {
    response.status(400).json({ error: 'A forma de pagamento já existe' });
  } else {
    if (!nome) {
      response.status(400).json({ error: 'O campo nome deve ser preenchido' });
    } else {
      if (pagamento.length < 3) {
        response
          .status(400)
          .json({ error: 'Insira uma forma de pagamento válida' });
      } else {
        next();
      }
    }
  }
};
