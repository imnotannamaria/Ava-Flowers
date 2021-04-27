const { Venda, Cliente } = require('../models');

module.exports = async (request, response, next) => {
  let {
    valorTotal,
    data,
    clientes_id,
    pagamentos_id,
    status_id,
  } = request.body;
  if (!valorTotal || valorTotal < 0.01) {
    response
      .status(400)
      .json({ error: 'Valor da compra deve ser de pelo menos R$0.01 :(' });
    return;
  } else {
    if (!data) {
      response.status(400).json({ error: 'Por favor insira uma data :(' });
      return;
    } else {
      let existe = await Cliente.findAll({ where: clientes_id });
      if (!existe.length) {
        response.status(400).json({
          error: 'Cliente não encontrado, por favor cadastre-se primeiro :(',
        });
        return;
      } else {
        if (!pagamentos_id) {
          response
            .status(400)
            .json({ error: 'Por favor insira um meio de pagamento:(' });
          return;
        } else {
          if (!status_id) {
            response
              .status(400)
              .json({ error: 'Por favor preencha o campo de status :(' });
            return;
          } else {
            next();
          }
        }
      }
    }
  }
};
