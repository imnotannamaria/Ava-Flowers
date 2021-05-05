const { Produto, sequelize } = require('../models');

const ProdutosController = {
  index: async (req, res) => {
    const produtos = await Produto.findAll();
    return res.json(produtos);
  },

  carrinho: (request, response) => {
    return response.render('carrinho');
  },

  create: async (req, res) => {
    let {
      nome,
      valor,
      quantidadeEstoque,
      categoria_id,
      descricao,
      img,
    } = req.body;

    let novoProduto = await Produto.create({
      nome,
      valor,
      quantidadeEstoque,
      categoria_id,
      descricao,
      img,
    });
    return res.json(novoProduto);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      nome,
      valor,
      quantidadeEstoque,
      categoria_id,
      descricao,
      img,
    } = req.body;
    const produto = await Produto.update(
      {
        nome,
        valor,
        quantidadeEstoque,
        categoria_id,
        descricao,
        img,
      },
      {
        where: { id },
      }
    );
    return res.json(produto);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    const produto = await Produto.destroy({
      where: { id },
    });
    return res.json(produto);
  },
};

module.exports = ProdutosController;
