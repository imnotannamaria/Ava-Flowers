const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');
const { Produto, sequelize } = require('../models');

router.get('/', ProdutosController.index);
//---------------------------rotas todas flores------------------------------------------------
router.get('/carrinho', ProdutosController.carrinho);
router.get('/suculenta', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 14,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/suculenta', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/crisantemo', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 18,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/crisantemo', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/girassol', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 12,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/girassol', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/hortensia', ProdutosController.hortensia);
router.get('/jasmim', ProdutosController.jasmim);
router.get('/lirios', ProdutosController.lirios);
router.get('/margarida', ProdutosController.margarida);
router.get('/rosa', ProdutosController.rosa);
router.get('/tulipa', ProdutosController.tulipa);
router.get('/violeta', ProdutosController.violeta);
//------------------------------ rotas buques--------------------------------------------------------
router.get('/florCampo', ProdutosController.buqueFlorC);
router.get('/buqueRosaC', ProdutosController.buqueRC);
router.get('/buqueMixRosas', ProdutosController.buqueMixRosa);
router.get('/buqueBeleza', ProdutosController.buqueBeleza);
router.get('/buqueMistos', ProdutosController.buqueMisto);
router.get('/orquidia-Hortensia', ProdutosController.buqueOrqH);
router.get('/primavera', ProdutosController.buquePrima);
router.get('/buque-rosas', ProdutosController.buqueR);
router.get('/buque-nacionais', ProdutosController.buqueRN);
//------------------------rotas ocasioes----------------------------------------------------------------
router.get('/dia-maes', ProdutosController.diaMaes);
router.get('/dia-maesMisto', ProdutosController.diaMaesMisto);
router.get('/dia-namorados', ProdutosController.namorados);
router.get('/dia-namoradosMisto', ProdutosController.namoradosMisto);
router.get('/encontro', ProdutosController.encontro);
router.get('/encontroMisto', ProdutosController.encontroMisto);
router.get('/dia-mulheres', ProdutosController.diaMulher);
router.get('/casamento', ProdutosController.casamento);
router.get('/aniversario', ProdutosController.aniversario);

router.post('/', ProdutosController.create);

router.put('/:id', ProdutosController.update);

router.delete('/:id', ProdutosController.delete);

module.exports = router;
