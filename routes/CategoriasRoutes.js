const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriasController');
const ValidarCategoria = require('../middlewares/ValidarCategoria');
const { Produto, sequelize } = require('../models');

router.get('/', CategoriaController.index);

router.get('/todasFlores', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      categoria_id: 20,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('todasFlores', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/buques', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      categoria_id: 19,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('buques', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/ocasioes', async function (req, res, next) {
  let listaProdutos = await Produto.findAll({
    where: {
      categoria_id: 21,
    },
  });
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('ocasioes', {
    title: 'Ava-Flowers',
    produtos: produtos,
  });
});

router.get('/todasFlores', CategoriaController.todasFlores);


router.get('/buques', CategoriaController.buques);

router.get('/ocasioes', CategoriaController.ocasioes);

router.post('/', ValidarCategoria, CategoriaController.create);

router.put('/:id', CategoriaController.update);

router.delete('/:id', CategoriaController.delete);

module.exports = router;
