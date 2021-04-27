const { Pedido } = require('../models');

module.exports = async (request, response, next) => {
  let { venda_id, quantidadePedido, produtos_id } = request.body;

  let pedido = await Pedido.findAll({
    where: { venda_id, quantidadePedido, produtos_id },
  });

  if (quantidadePedido <= 0) {
    response.status(400).json({ error: 'selecione uma quantidade válida' });
  } else {
    if (!quantidadePedido) {
      response
        .status(400)
        .json({ error: 'O campo quantidade deve ser preenchido' });
    } else {
      if (!produtos_id) {
        response
          .status(400)
          .json({ error: 'o campo produtos_id deve ser preenchido' });
      } else {
        if (produtos_id <= 0) {
          response.status(400).json({ error: 'selecione uma id válida' });
        } else {
          if (venda_id <= 0) {
            response.status(400).json({ error: 'selecione uma id válida' });
          } else {
            if (!venda_id) {
              response
                .status(400)
                .json({ error: 'o campo vendas_id deve ser preenchido' });
            } else {
              next();
            }
          }
        }
      }
    }
  }
};
