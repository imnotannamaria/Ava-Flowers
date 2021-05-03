var express = require('express');
const { Produto, sequelize } = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  let listaProdutos = await Produto.findAll();
  const produtos = listaProdutos.map((result) => result.dataValues);
  res.render('index', { title: 'Ava-Flowers', produtos: produtos });
});

module.exports = router;
