const { Status } = require('../models');
module.exports = async (request, response, next) => {
  let { nome } = request.body;

  if (!nome) {
    response.status(400).json({ error: 'O status não pode ficar vazio :(' });
    return;
  }

  next();
};
