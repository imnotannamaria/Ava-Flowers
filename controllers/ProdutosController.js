const { Produto, sequelize } = require('../models');

let produtosCarrinho = [];
function findProduto(element, index, array) {
  return element.id == this;
}

const ProdutosController = {
  index: async (req, res) => {
    const produtos = await Produto.findAll();
    return res.json(produtos);
  },

  carrinho: async (request, response) => {
    let id = request.query.id;

    let index = produtosCarrinho.findIndex(findProduto, id);

    if (index >= 0) {
      produtosCarrinho[index].qtde++;
    } else {
      const novoProduto = await Produto.findByPk(id);
      novoProduto.qtde = 1;
      produtosCarrinho.push(novoProduto);
    }

    let total = 0;
    produtosCarrinho.forEach((produto) => {
      total += produto.valor * produto.qtde;
    });

    return response.render('carrinho', {
      produtosCarrinho: produtosCarrinho,
      valorTotal: total,
    });
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
