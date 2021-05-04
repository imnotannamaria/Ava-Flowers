const { Produto, sequelize } = require('../models');

let produtosCarrinho = [];
function findProduto(element, index, array) {
  return (element.id == this);
}

const ProdutosController = {
  index: async (req, res) => {
    const produtos = await Produto.findAll();
    return res.json(produtos);
  },

  carrinho: async (request, response) => {
    let id = request.query.id;
    
    if (id) {
      let index = produtosCarrinho.findIndex(findProduto, id);

      if (index >= 0) {
        produtosCarrinho[index].qtde++;
      } else {
        const novoProduto = await Produto.findByPk(id);
        novoProduto.qtde = 1;
        produtosCarrinho.push(novoProduto);
      }

      response.redirect('/produtos/carrinho');
    }

    let total = 0;
    produtosCarrinho.forEach((produto) => {
       total += (produto.valor * produto.qtde);
    } );

    return response.render('carrinho', { produtosCarrinho: produtosCarrinho, valorTotal: total });
  },
  

 
  //------------------ todas flores----------------------------------------
  suculenta: async (request, response) => {
    return response.render('todasFlores/suculenta');
  },
  crisantemo: (request, response) => {
    return response.render('todasFlores/crisantemo');
  },
  girassol: (request, response) => {
    return response.render('todasFlores/girassol');
  },
  hortensia: (request, response) => {
    return response.render('todasFlores/hortensia');
  },
  jasmim: (request, response) => {
    return response.render('todasFlores/jasmim');
  },
  lirios: (request, response) => {
    return response.render('todasFlores/lirios');
  },
  margarida: (request, response) => {
    return response.render('todasFlores/margarida');
  },
  rosa: (request, response) => {
    return response.render('todasFlores/rosa');
  },
  tulipa: (request, response) => {
    return response.render('todasFlores/tulipa');
  },
  violeta: (request, response) => {
    return response.render('todasFlores/violeta');
  },
  //-------------------rotas buques-----------------------
  buqueRC: (request, response) => {
    return response.render('todosBuques/buqueRosaC');
  },
  buqueBeleza: (request, response) => {
    return response.render('todosBuques/buqueBeleza');
  },
  buqueFlorC: (request, response) => {
    return response.render('todosBuques/buqueFlorC');
  },
  buqueMisto: (request, response) => {
    return response.render('todosBuques/buqueMisto');
  },
  buqueMixRosa: (request, response) => {
    return response.render('todosBuques/buqueMixRosas');
  },
  buqueOrqH: (request, response) => {
    return response.render('todosBuques/buqueOH');
  },
  buqueR: (request, response) => {
    return response.render('todosBuques/buqueRosas');
  },
  buquePrima: (request, response) => {
    return response.render('todosBuques/buquePrimavera');
  },
  buqueRN: (request, response) => {
    return response.render('todosBuques/buqueRosasN');
  },
  //-------- --------------Ocasiões-----------------------------------------------
  diaMaes: (request, response) => {
    return response.render('todasOcasioes/diaMaes');
  },
  diaMaesMisto: (request, response) => {
    return response.render('todasOcasioes/mistoMaes');
  },
  namorados: (request, response) => {
    return response.render('todasOcasioes/diaNamorados');
  },
  namoradosMisto: (request, response) => {
    return response.render('todasOcasioes/mistoNamorados');
  },
  encontro: (request, response) => {
    return response.render('todasOcasioes/primeiroEncontro');
  },
  encontroMisto: (request, response) => {
    return response.render('todasOcasioes/mistoEncontro');
  },
  diaMulher: (request, response) => {
    return response.render('todasOcasioes/diaMulheres');
  },
  casamento: (request, response) => {
    return response.render('todasOcasioes/pedidoCasamento');
  },
  aniversario: (request, response) => {
    return response.render('todasOcasioes/aniversario');
  },

  //----------------------- fim exibição produtos-------------------------------

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
