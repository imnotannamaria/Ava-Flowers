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
router.get('/hortensia', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 19,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/hortensia', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/jasmim', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 20,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/jasmim', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/lirios', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 21,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/lirios', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/margarida', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 22,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/margarida', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/rosa', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 15,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/rosa', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/tulipa', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 23,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/tulipa', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/violeta', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 24,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/violeta', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/cacto', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 13,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores/cacto', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
//------------------------------ rotas buques--------------------------------------------------------
router.get('/Buque-Colorido', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 35,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bColorido', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Rosinha', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 36,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bRosinha', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Branco', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 37,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bBranco', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/Buque-Tulipas', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 38,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bTulipa', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Roxo', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 39,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bRoxo', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Rosas_Coloridas', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 40,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bRosaC', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Degrade', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 41,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bDegrade', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Maria', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 42,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bMaria', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Flores_Rosadas', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 43,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bFRosadas', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Buque-Girassol', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 44,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todosBuques/bGirassol', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
//----------------------------------------------------------------------
router.get('/Ocasiao-Aniversario', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 25,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/aniversario', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Dia_Maes', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 16,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/diaMaes', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/Ocasiao-Dia_Maes.2', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 29,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/diaMaes2', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/Ocasiao-Dia_Mulheres', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 30,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/diaMulheres', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Dia_Namorados', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 28,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/diaNamorados', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Ano_Casamento', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 34,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/anosCasamento', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Dia_Mulheres.2', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 17,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/diaMulheres2', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Pedido_Casamento', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 27,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/pedidoCasamento', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Outono', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 26,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/outono', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Enterro', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 31,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/enterro', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
router.get('/Ocasiao-Casa', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      id: 32,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasOcasioes/casaNova', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});
//-----------------------------------------------------------------------
router.post('/', ProdutosController.create);

router.put('/:id', ProdutosController.update);

router.delete('/:id', ProdutosController.delete);

module.exports = router;
